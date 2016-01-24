import styles from './_Player.scss';
import React from 'react';


export default class Player extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isSolved: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    if(evt.target.value.toLowerCase() === this.props.playerDetails.fullName.toLowerCase()) {
      this.setState({isSolved: true});
    }
  }
 
  render() {
    this.state.placeholderString = this.props.playerDetails.fullName.split('').map(function(char) {
      if(char === ' ' || char === '\'') {
        return char;
      } else {
        return '*';
      }
    }).join('');

    return (
      <div className={styles.player}>
        <div>{this.state.placeholderString} {this.state.isSolved.toString()}</div>
        <div><input type='text' placeholder={this.state.placeholderString} onChange={this.handleChange} /></div>
      </div>
    );
  }
}
