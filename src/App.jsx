import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./Components/Music/Music";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileInfo/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux"
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Components/common/Preloader/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized){
            return <Preloader/>
        }
        else
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
                        <Route path="/login"
                               element={<Login
                               />}
                        />
                        <Route path='/music' render={() => <Music/>}/>
                    </Routes>
                </div>
                <div>
                </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>({
    initialized: state.app.initialized
})
export default compose(
          connect(mapStateToProps, {initializeApp})(App)
)
