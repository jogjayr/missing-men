import styles from './_Body.scss';
import React from 'react';
import Menu from '../Menu/Menu';
import Pitch from '../Pitch/Pitch';

let { PropTypes } = React;

export default class Body extends React.Component {

 
  render() {
  console.log(this.props);
    return (
      <div className={styles.body}>
        <h1 className={styles.header}>React Seed</h1>
	      <Pitch players={this.props.matchTeamsSection.homeTeam.team.startingPitchFormation.leftToRightPlayerIds} />
        <ol>
          <li>Style up the Body component. Give it a background color. (You shouldn't need to reload your browser to view the changes). Find the Sass file here: <pre>./app/components/Body/_Body.scss</pre></li>
          <li>Change the data rendered above. Look in: <pre>./app/components/App/App.jsx</pre> Understand how data flows from the actions into the stores and then into the Body component.</li>
        </ol>
      </div>
    );
  }
}
