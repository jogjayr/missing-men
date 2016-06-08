import styles from './_PositionGroup.scss';
import React from 'react';
import Player from '../Player/Player';

export default class PositionGroup extends React.Component {
  render() {
    return (
      <div className={styles.pos_group_layout}>
      {this.props.players.map((player) => {
        return (<Player playerDetails={player} />);
      }, this)}
      </div>
    );
  }
}

