import styles from './_PositionGroup.scss';
import React from 'react';
import Player from '../Player/Player'

let { PropTypes } = React;

export default class Body extends React.Component {

 
  render() {
    return (
      <div>
      {this.props.players.map((id) => {
        return (<Player playerId={id} />);
      }, this)}
      </div>
    );
  }
}
