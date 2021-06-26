import React, { Component } from 'react';
import { BrowserRouter, Route , Redirect} from 'react-router-dom';
import './App.css';
import { HomeComponent  } from "./component/home.component";
import { LoginComponent } from "./component/login.component";


class App extends Component {
 
  render() {
    var isUserLoggedIn  = localStorage.isUserLoggedIn;

    return (
      <BrowserRouter>
        <div>
          {
            !isUserLoggedIn &&
            <Redirect to="/login" />
          }
         
          <Route path="/" exact component= { LoginComponent } />
          <Route path="/login"  component= { LoginComponent }/>
          <Route path="/home"   component= { HomeComponent  }/>  
          <Redirect to="/login" />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
