import styles from './_App.scss';

import React from 'react';
import AppActions from '../../actions/AppActions';
import ItemsStore from '../../stores/ItemsStore';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

function getAppState() {
  return {
    matchTeamsSection: ItemsStore.getAll()
  };
}

export default class App extends React.Component {

  state = getAppState()

  componentDidMount() {
    ItemsStore.addChangeListener(this.onChange);
    AppActions.getItems();
  }

  componentWillUnmount() {
    ItemsStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState(getAppState());
  }

  render() {
    if(this.state.matchTeamsSection && this.state.matchTeamsSection.homeTeam) {
      return (
        <div className={styles.app}>
          <Body matchTeamsSection={this.state.matchTeamsSection} />
          <Footer />
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

