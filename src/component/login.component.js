import React, {Component} from 'react';
import { FormValidationService } from '../service/form-validation.service';

class LoginComponent extends Component {

  constructor(){
    super();
    this.state = {
      loginData: {
        username: {
          value: "",
          isValid: true,
          validations: ['isRequired', 'isEmail']
        },
        password: {
          value: "",
          isValid: true ,
          validations: ['isRequired']
        }
      }
    }
  }

  handleChange = (event) => {
    const loginData = this.state.loginData
    loginData[event.target.name].value = event.target.value;
    this.setState({loginData});
  };
 
  onSubmitLoginForm = (event) => {
    event.preventDefault();
    const loginData = this.state.loginData;
    for(let field in loginData) {
      for(let i = 0; i < loginData[field].validations.length; i++) {
        if(FormValidationService[loginData[field].validations[i]](loginData[field].value)){
          loginData[field].isValid = true;
        } else{
          loginData[field].isValid = false;
          this.setState({loginData});
          return;
        }
      };
    };
    this.setState({loginData});
    localStorage.isUserLoggedIn = "true";
    this.props.history.push('/home/list');
  };

  render() {
    return (
      <div className="container login-form">
      <form 
        name="loginForm" 
        noValidate  
        onSubmit={ this.onSubmitLoginForm }
      >
        <label>Email ID</label>
        <input 
          type="text" 
          id="fname" 
          name="username" 
          placeholder="Your email id.." 
          value={this.state.loginData.username.value} 
          onChange={this.handleChange}
          required
          className={(!this.state.loginData.username.isValid ? "error" : "")}
        />
        
    
        <label>Password</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          placeholder="Your password.." 
          value={this.state.loginData.password.value} 
          onChange={this.handleChange}
          required
          className={(!this.state.loginData.password.isValid ? "error" : "")}
        />
      
        <input type="submit" value="LOGIN" />
      </form>
      </div>
    );  
  }
}

export  { LoginComponent };