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
    this.okToNotReplaceWithAsterisk = [' ', '\'', '-'];
    this.okToNotReplaceWithAsterisk = new Set(this.okToNotReplaceWithAsterisk);
  }

  handleChange(evt) {
    var enteredName = evt.target.value.toLowerCase();
    var playerName = this.props.playerDetails.fullName.toLowerCase();

    if(enteredName.localeCompare(playerName, 'search', {sensitivity: 'base'}) === 0) {
      AppDispatcher.dispatch({
        actionType: PLAYER_SOLVED,
        player: this.props.playerDetails
      });
    }
  }

  render() {
    let {playerDetails} = this.props;
    let placeholderString, playerInput;
    let self = this;
    if(playerDetails) {
      if(!playerDetails.isSolved) {
        placeholderString = playerDetails.fullName.split('').map(function(char) {
          if(self.okToNotReplaceWithAsterisk.has(char)) {
            return char;
          } else {
            return '*';
          }
        }).join('');
        playerInput = (<input type='text' placeholder={placeholderString} onChange={this.handleChange} />);
      }
      else {
        placeholderString = '';
        playerInput = (<input type='text' value={playerDetails.fullName} readonly />);
      }

      return (
        <div className={styles.player}>
          <div>{placeholderString} </div>
          <div>{playerInput}</div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

