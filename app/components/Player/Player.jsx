import styles from './_Player.scss';
import React from 'react';


export default class Player extends React.Component {

 
  render() {
    let placeholderString = this.props.playerDetails.fullName.split('').map(function(char) {
      if(char === ' ' || char === '\'') {
        return char;
      } else {
        return '*';
      }
    }).join('');

    return (
      <div className={styles.player}>
        <div>{placeholderString}</div>
        <div><input type='text' placeholder={placeholderString} /></div>
      </div>
    );
  }
}
