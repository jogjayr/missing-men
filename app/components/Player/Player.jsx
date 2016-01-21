import styles from './_Player.scss';
import React from 'react';

let { PropTypes } = React;

export default class Body extends React.Component {

 
  render() {
    return (
      <span>
        {this.props.playerId}
      </span>
    );
  }
}
