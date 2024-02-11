import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Component from './Components/BlyadCOmponent';
// import Blyad from './Components/BlyadCOmponent';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./Components/Music/Music";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div class='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile"
                               element={<Profile
                                   state={props.state.profilePage} addPost={props.addPost}/>}/>
                        <Route path="/dialogs/*"
                               element={<Dialogs
                                   state={props.state.dialogsPage}
                               />}
                        />
                        <Route path='/music' render={()=><Music/>}/>
                    </Routes>
                </div>
                <div>

                </div>
            </div>
        </BrowserRouter>

    );
}


export default App;
