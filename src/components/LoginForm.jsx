import React, { Component } from 'react';
import './LoginPage.css'
class LoginForm extends Component {
  render() {
    return (
      <div className="LoginPage">



<div className="SignUp">
 <h1>Sign Up Now!</h1>
</div>


    <form className="LoginPage__form">
First Name<input type="text" name="firstName"/>
Last Name<input type="text" name="lastName"/>
Email<input type= "text" name="Email"/>
Phone<input type="text" name="Phone"/>
School<input type="text" name="School"/>
Major<input type="text" name="Major"/>
Graduation<input type= "text" name="Graduation"/>
<input type = "button" value="submit"/>
    </form>



  {this.props.name}
      </div>
    );
  }
}

export default LoginForm;
