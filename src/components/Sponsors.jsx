import React, { Component } from 'react';
import './Sponsors.css';
import icon from'../hackday icon.png';

class App extends Component {
  render() {
    return (
      <div className="main_page">
        <div class="nav-bar">
          <div class="nav-tabs">
              <button onClick={this.props.changePage.bind(null, 'event')} className="sponsorButtons">Event </button>
              <button onClick={this.props.changePage.bind(null, 'assessment')}  className="sponsorButtons" >Assessment</button>
              <button onClick={this.props.changePage.bind(null, 'scouting')}  className="sponsorButtons" >Scouting</button>
            </div>
        </div>
      </div>

    );
  }
}

export default App;
