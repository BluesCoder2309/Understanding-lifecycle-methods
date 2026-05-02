import React from "react";

export default class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 0,
    };
    this.timer = null;
    console.log("TimerOne Constructor");
  }

  static getDerivedStateFromProps() {
    console.log("TimerOne getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(nextProp, nextState) {
    return true;
  }

  render() {
    console.log("TimerOne Render");
    return (
      <>
        <h1>
          Time Spent:{" "}
          {new Date(this.state.time * 1000).toISOString().slice(11, 19)}{" "}
        </h1>
      </>
    );
  }

  componentDidMount() {
    console.log("TimerOne componentDidMount");
    console.log("___________________________");
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("TimerOne getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("TimerOne componentDidUpdate");
    console.log("___________________________");

    if (prevProps.timerOn !== this.props.timerOn) {
      if (this.props.timerOn) {
        this.timer = setInterval(() => {
          this.setState((prevState) => ({ time: prevState.time + 5 }));
        }, 5000);
      } else {
        clearInterval(this.timer);
      }
    }
  }

  componentWillUnmount() {
    console.log("TimerOne componentWillUnmount");
    clearInterval(this.timer);
  }
}
