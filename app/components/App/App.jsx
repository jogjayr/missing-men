import styles from './_App.scss';

import React from 'react';
import AppActions from '../../actions/AppActions';
import ItemsStore from '../../stores/ItemsStore';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

function getAppState() {
  let storeContents = ItemsStore.getAll();
  if(!storeContents.homeTeam && !storeContents.awayTeam) {
    return {
      matchTeamsSection: {
        homeTeam: {
          team: {
            startingPitchFormation: {
              leftToRightPlayerIds: [[]]
            },
            club: {
              name: ''
            },
            lastMatchTeamSheet: {
              startingLineup: []
            }
          },
          lastMatchResult: {
            finalScore: {
              home: ''
            }
          }
        },
        awayTeam: {
          team: {
            startingPitchFormation: {
              leftToRightPlayerIds: [[]]
            },
            club: {
              name: ''
            },
            lastMatchTeamSheet: {
              startingLineup: []
            }
          },
          lastMatchResult: {
            finalScore: {
              away: ''
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
    AppActions.getItems();
  }

  componentWillUnmount() {
    ItemsStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState(getAppState());
  }

  render() {
    return (
      <div className={styles.app}>
        <Body matchTeamsSection={this.state.matchTeamsSection} />
        <Footer />
      </div>
    );
  }
}
