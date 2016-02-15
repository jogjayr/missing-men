import React from 'react'
import PositionGroup from '../PositionGroup/PositionGroup'

import styles from './_Pitch.scss';
let {PropTypes} = React;

export default class Pitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let {props} = this;
    let formation = props.formation.map((layer) => {
      return layer.map((playerId) => {
        if(props.startingLineup) {
          return props.startingLineup.filter(function(player) {
            return player.id === playerId.toString();
          }, this)[0];
        }
      }, this);
    }, this);
    return (<div className={styles.pitch}>
      {formation.reverse().map((layer) => {
        return (<PositionGroup players={layer}/>);
      }, this)}
    </div>);
  }
}

