import React from 'react'

let {PropTypes} = React;

export default class Pitch extends React.Component {
  static defaultProps = {
    leftToRightPlayerIds: []
  };
  
  static propTypes = {
    leftToRightPlayerIds: PropTypes.array.isRequired
  };
  
	render() {
    console.log(this.props);
		return (<div>
      {this.props.players.map((layer) => {
        return layer.map((id) => {
          return (<div>{id}</div>); 
        }, this)
      }, this)}
    </div>);
	}
}
