import styles from './_Body.scss';
import React from 'react';
import Menu from '../Menu/Menu';
import Pitch from '../Pitch/Pitch';
import AppActions from '../../actions/AppActions';

let { PropTypes } = React;

export default class Body extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let buttonOrPitch;
    let {matchTeamsSection, hasStarted} = this.props;
    return (
      <div className={styles.body}>
        <h1 className={styles.header}>Missing Men</h1>
        <h2 className={styles.matchResult}>
          <span>{matchTeamsSection.homeTeam.team.club.name} </span>
          <span>{matchTeamsSection.homeTeam.lastMatchResult.finalScore.home}</span>
          <span> - </span>
          <span>{matchTeamsSection.awayTeam.lastMatchResult.finalScore.away} </span>
          <span>{matchTeamsSection.awayTeam.team.club.name}</span>
        </h2>
        <Pitch formation={matchTeamsSection.homeTeam.team.startingPitchFormation.leftToRightPlayerIds}
               startingLineup={matchTeamsSection.homeTeam.team.lastMatchTeamSheet.startingLineUp} />
      </div>
    );
  }
}

