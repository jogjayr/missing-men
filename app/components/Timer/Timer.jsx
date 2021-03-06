import React from 'react';

export default class Timer extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  getInitialState() {
    return {
      elapsedTime: 0
    };
  }

  componentDidMount() {
    this.timer = setInterval(this.tick.bind(this), 50);
  }

  tick() {
    if(!this.props.finishedSolving) {
      this.setState({
        elapsedTime: (new Date() - this.props.startTime) / 1000
      });
    } else {
      clearInterval(this.timer);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
     <div>{this.state.elapsedTime}</div>
    );
  }
}

