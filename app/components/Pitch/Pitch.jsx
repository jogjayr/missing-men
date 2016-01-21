import React from 'react'
import PositionGroup from '../PositionGroup/PositionGroup'

let {PropTypes} = React;

export default class Pitch extends React.Component {
  static defaultProps = {
    leftToRightPlayerIds: []
  };
  
  static propTypes = {
    leftToRightPlayerIds: PropTypes.array.isRequired
  };
  
	render() {
		return (<div>
      {this.props.players.reverse().map((layer) => {
        return (<PositionGroup players={layer} />);
      }, this)}
    </div>);
	}
}
