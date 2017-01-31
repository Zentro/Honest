import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';

// get remote
import { remote } from 'electron';
const { BrowserWindow, app } = remote
let timerWindow = null;

// set path by hand, cause problem with react template
// https://github.com/chentsulin/electron-react-boilerplate/issues/374

// console.log('path ==>', remote.app.getPath('appData'))
var path = process.cwd();
console.log('path ==>', path)
export default class Home extends Component {
  setTimer() {
    timerWindow = new BrowserWindow({
      width: 800,
      height: 600,
      modal: true,
    })
    timerWindow.loadURL('file://' + path + '/app/InnerPages/TimerModal/index.html');

    // console.log('==> set timer');

  }

  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Welcome to Honest</h2>
          {/*<Link to="/counter">to Counter</Link>*/}
          <button onClick={this.setTimer} >Set Timer</button>
        </div>
      </div>
    );
  }
}