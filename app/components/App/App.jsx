import styles from './_App.scss';

import React from 'react';
import AppActions from '../../actions/AppActions';
import AppStateStore from '../../stores/AppStateStore';
import Body from '../Body/Body';
import Timer from '../Timer/Timer';
import Footer from '../Footer/Footer';

function getAppState() {
  let finishedSolving;
  if(AppStateStore.matchTeamsSection) {
    finishedSolving = AppStateStore.matchTeamsSection.awayTeam.team.lastMatchTeamSheet.startingLineUp.reduce((allSolved, player) => {
      return player.isSolved && allSolved;
    }, true);
  } else {
    finishedSolving = AppStateStore.finishedSolving;
  }
  return {
    matchTeamsSection: AppStateStore.matchTeamsSection,
    finishedSolving: finishedSolving,
    startTime: AppStateStore.startTime,
    hasStarted: AppStateStore.hasStarted
  };
}

export default class App extends React.Component {

  state = getAppState()

  componentDidMount() {
    AppStateStore.addChangeListener(this.onChange);
    AppActions.getItems();
  }

  componentWillUnmount() {
    AppStateStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState(getAppState());
  }

  startGame() {
    AppActions.startGame();
  }

  render() {
    return (
      <div className={styles.app}>
        <h1 className={styles.header}>Missing Men</h1>
        {
          (() => {
            if(this.state.matchTeamsSection && this.state.matchTeamsSection.awayTeam) {
              if(this.state.hasStarted) {
                return ([<Body matchTeamsSection={this.state.matchTeamsSection} />,
                         <Timer finishedSolving={this.state.finishedSolving} startTime={this.state.startTime.valueOf()} />]);
              } else {
                return (<button onClick={this.startGame}>Start Game</button>);
              }
            }
            else {
              return (<div></div>);
            }
          })()
        }

        <Footer />
      </div>);
  }
}

