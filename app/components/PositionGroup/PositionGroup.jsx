import styles from './_PositionGroup.scss';
import React from 'react';
import Player from '../Player/Player'

let { PropTypes } = React;

export default class PositionGroup extends React.Component {
  render() {
    return (
      <div>
      {this.props.players.map((player) => {
        return (<Player playerDetails={player} />);
      }, this)}
      </div>
    );
  }
}
