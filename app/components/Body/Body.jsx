import styles from './_Body.scss';
import React from 'react';
import Menu from '../Menu/Menu';
import Pitch from '../Pitch/Pitch';

let { PropTypes } = React;

export default class Body extends React.Component {

  render() {
    return (
      <div className={styles.body}>
        <h1 className={styles.header}>Missing Men</h1>
        <Pitch formation={this.props.matchTeamsSection.homeTeam.team.startingPitchFormation.leftToRightPlayerIds} 
               startingLineup={this.props.matchTeamsSection.homeTeam.team.lastMatchTeamSheet.startingLineUp} />
      </div>
    );
  }
}
