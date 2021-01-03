import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import  Profile from './components/profile/Profile'
import UserProfile from './components/userprfile/UserProfile';

import './App.css';

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <NavBar /> 
       <Route  path='/profile' component={Profile}      />
       
       <Route  path='/user' component={UserProfile}      />
      
       </BrowserRouter>
    </div>
  );
}

export default App;
