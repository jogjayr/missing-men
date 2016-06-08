import styles from './_Body.scss';
import React from 'react';
import Pitch from '../Pitch/Pitch';

export default class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {matchTeamsSection} = this.props;
    return (
      <div className={styles.body}>
        <h2 className={styles.matchResult}>
          <span>{matchTeamsSection.homeTeam.team.club.name} </span>
          <span>{matchTeamsSection.homeTeam.lastMatchResult.finalScore.home}</span>
          <span> - </span>
          <span>{matchTeamsSection.awayTeam.lastMatchResult.finalScore.away} </span>
          <span>{matchTeamsSection.awayTeam.team.club.name}</span>
        </h2>
        <Pitch formation={matchTeamsSection.awayTeam.team.startingPitchFormation.leftToRightPlayerIds}
               startingLineup={matchTeamsSection.awayTeam.team.lastMatchTeamSheet.startingLineUp} />
      </div>
    );
  }
}

