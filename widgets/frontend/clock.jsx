import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };

  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  componentDidMount() {
    this.handle = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnMount() {
    clearInterval(this.handle);
    this.handle = 0;
  }

  render(){
    var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    return (
      <div className="clock">
        <h1>Clock</h1>
      <div className="date">
        <p>Time: <span>{`${this.state['time'].getHours()}:
        ${this.state['time'].getMinutes()}:
        ${this.state['time'].getSeconds()}`}</span></p>
      <p>Date: <span>{`${days[this.state['time'].getDay()]}
          ${months[this.state['time'].getMonth()]}
          ${this.state['time'].getDate()}
          ${this.state['time'].getFullYear()}
          `}</span></p>

        </div>
        </div>
    );
  }
}

export default Clock;
