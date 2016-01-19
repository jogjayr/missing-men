import styles from './_App.scss';

import React from 'react';
import AppActions from '../../actions/AppActions';
import ItemsStore from '../../stores/ItemsStore';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

function getAppState() {
  let storeContents = ItemsStore.getAll();
  console.log(storeContents);
  if(!storeContents.homeTeam && !storeContents.awayTeam) {
    console.log('in here2');
    return {
      matchTeamsSection: {
        homeTeam: {
          team: {
            startingPitchFormation: {
              leftToRightPlayerIds: [[]]
            }
          }
        }
      }
    };
  }
  return {
    matchTeamsSection: ItemsStore.getAll()
  };
}

export default class App extends React.Component {

  state = getAppState()
  
  componentDidMount() {
    ItemsStore.addChangeListener(this.onChange);
    console.log('here');
    AppActions.getItems();
  }

  componentWillUnmount() {
    ItemsStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState(getAppState());
  }

  render() {
  console.log(this.state);
    return (
      <div className={styles.app}>
        <Body matchTeamsSection={this.state.matchTeamsSection} />
        <Footer />
      </div>
    );
  }
}
