import styles from './_App.scss';

import React from 'react';
import AppActions from '../../actions/AppActions';
import AppStateStore from '../../stores/AppStateStore';
import Body from '../Body/Body';
import Timer from '../Timer/Timer';
import Footer from '../Footer/Footer';

function getAppState() {
  return {
    matchTeamsSection: AppStateStore.matchTeamsSection,
    finishedSolving: AppStateStore.finishedSolving,
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
    if(this.state.matchTeamsSection && this.state.matchTeamsSection.homeTeam) {
      if(this.state.hasStarted) {
        return (
          <div className={styles.app}>
            <Timer startTime={this.state.startTime.valueOf()} />
            <Body matchTeamsSection={this.state.matchTeamsSection} />
            <Footer />
          </div>
        );
      } else {
        return (<button onClick={this.startGame}>Start Game</button>);
      }
    } else {
      return (<div></div>);
    }
  }
}

