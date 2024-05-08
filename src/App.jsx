import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./Components/Music/Music";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import Usersold from "./Components/Users/Usersold";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileInfo/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";

const App = (props) => {

    return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div class='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile/:userId?"
                               element={<ProfileContainer
                               />}/>
                        <Route path="/dialogs/*"
                               element={<DialogsContainer
                               />}
                        />
                        <Route path="/users/*"
                               element={<UsersContainer
                               />}
                        />
                        <Route path='/music' render={()=><Music/>}/>
                    </Routes>
                </div>
                <div>
                </div>
            </div>
    );
}


export default App;
