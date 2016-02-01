import styles from './_Player.scss';
import React from 'react';
import AppDispatcher from '../../dispatcher/AppDispatcher';
import {
  PLAYER_SOLVED
} from '../../constants/AppConstants';

export default class Player extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    if(evt.target.value.toLowerCase() === this.props.playerDetails.fullName.toLowerCase()) {
      AppDispatcher.dispatch({
        actionType: PLAYER_SOLVED,
        player: this.props.playerDetails
      });
    }
  }

  render() {
    let {playerDetails} = this.props;
    if(playerDetails) {
      if(!playerDetails.isSolved) {
        let placeholderString = playerDetails.fullName.split('').map(function(char) {
          if(char === ' ' || char === '\'') {
            return char;
          } else {
            return '*';
          }
        }).join('');

        return (
          <div className={styles.player}>
            <div>{placeholderString} </div>
            <div><input type='text' placeholder={placeholderString} onChange={this.handleChange} /></div>
          </div>
        );
     } else {
       return(
         <div className={styles.playerSolved}>
           <div>{playerDetails.fullName}</div>
         </div>
        );
      }
    } else {
      return (<div></div>);
    }
  }
}

