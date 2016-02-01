import styles from './_App.scss';

import React from 'react';
import AppActions from '../../actions/AppActions';
import AppStateStore from '../../stores/AppStateStore';
import Body from '../Body/Body';
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

  render() {
    if(this.state.matchTeamsSection && this.state.matchTeamsSection.homeTeam) {
      return (
        <div className={styles.app}>
          <Body matchTeamsSection={this.state.matchTeamsSection}
                hasStarted={this.state.hasStarted}/>
          <Footer />
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

