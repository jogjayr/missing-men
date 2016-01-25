import styles from './_Player.scss';
import React from 'react';


export default class Player extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      isSolved: false
    };
  }

  handleChange(evt) {
    if(evt.target.value.toLowerCase() === this.props.playerDetails.fullName.toLowerCase()) {
      this.setState({isSolved: true});
    }
  }

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
        <div>{placeholderString} {this.state.isSolved.toString()}</div>
        <div><input type='text' placeholder={placeholderString} onChange={this.handleChange} /></div>
      </div>
    );
  }
}
