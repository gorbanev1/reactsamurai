import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Component from './Components/BlyadCOmponent';
// import Blyad from './Components/BlyadCOmponent';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from "./Components/Dialogs/Dialogs";

// import {Route, Routes} from "react-router-dom";



// alert(names[0].toUpperCase())
const App = () => {
 
  return (
     <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div class='app-wrapper-content'>
        {/*<Profile/>*/}
        <Dialogs/>
        </div>
          <div>

              {/*<Routes>*/}
              {/*    <Route path="/profile" element={<Profile/>}/>*/}
              {/*    <Route path="/dialogs" element={<Dialogs/>}/>*/}
              {/*</Routes>*/}
      </div>
      </div>

  );
}


export default App;
