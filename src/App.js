import React, { Component } from 'react';
import './App.css';
import icon from'./hackday icon.png';
import LoginForm from './components/LoginForm'
import HomePage from './components/HomePage'
import Sponsors from './components/Sponsors'
import Event from './components/Event'
import Assessment from './components/Assessment'
import Scouting from './components/Scouting'

class App extends Component {
  state = {
    currentPage: 'home'
  }
  changePage = (page) => {
    this.setState({
      currentPage: page
    })
  }

  render() {
    let currentPageComponent;
    switch (this.state.currentPage) {
      case 'home':
     currentPageComponent = <HomePage changePage={this.changePage} />;
        break;
      case 'login':
     currentPageComponent = <LoginForm />;
        break;
      case 'sponsors':
    currentPageComponent = <Sponsors changePage={this.changePage}/>;
      break;
       case 'event':
      currentPageComponent = <Event/>
      break;
       case 'assessment':
       currentPageComponent = <Assessment/>
      break;
       case 'scouting':
       currentPageComponent = <Scouting/>
      break;
      default:
        console.log('we don\'t have a current page');
    }
    return (
      <div className="main_page">

  {currentPageComponent}

      </div>
    );
  }
}

export default App;
