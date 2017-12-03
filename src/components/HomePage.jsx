import React, { Component } from 'react';
import './HomePage.css';
import icon from'../hackday icon.png';

class App extends Component {
  render() {
    return (
      <div className="main_page">
        <div className="dropdown">
          <button className="dropdown-button">
            <p>Are you a Student or Sponsor?</p>
          </button>
          <ul>
           <li onClick={this.props.changePage.bind(null, 'login')} >Student</li>
        	 <li onClick={this.props.changePage.bind(null,'sponsors')}>Sponsor</li>
          </ul>
        </div>

        <img id="icon" src={icon}></img>







      </div>
    );
  }
}

export default App;
