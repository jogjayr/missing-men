import styles from './_Body.scss';
import React from 'react';
import Menu from '../Menu/Menu';
import Pitch from '../Pitch/Pitch';

let { PropTypes } = React;

export default class Body extends React.Component {

  render() {
    let {matchTeamsSection} = this.props;
    return (
      <div className={styles.body}>
        <h1 className={styles.header}>Missing Men</h1>
        <Pitch formation={matchTeamsSection.homeTeam.team.startingPitchFormation.leftToRightPlayerIds}
               startingLineup={matchTeamsSection.homeTeam.team.lastMatchTeamSheet.startingLineUp} />
      </div>
    );
  }
}
