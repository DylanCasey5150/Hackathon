import React, { Component } from 'react';
import icon from '../scouting.png';
import './Scouting.css';

class App extends Component {
  render() {
    return (
      <div class="page-container">

      <br/>      <br/>
      <br/>

      <div class="contents">
          <h1> Talent Scouting </h1>
      </div>

      <div class="box">
      <img id="qrCode" src={icon}></img>
      </div>

      <div class="extra"></div>

      </div>
    );
  }
}

export default App;
