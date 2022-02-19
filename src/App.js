import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";


const App = (props) => {
    // let posts = [
    //     {id:1, message: 'Hi, how are you?', likesCount:12},
    //     {id:2, message: "It's, my first post?", likesCount:11},
    //     {id:3, message: "It's, my first post?", likesCount:10}
    // ]
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div class='app-wrapper-content'>
                    <Routes>
                        {/*<Route path="/dialogs/*" element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>*/}
                        {/*<Route path="/profile/*" element={<Profile posts={props.posts}/>}/>*/}
                        {/*<Route path="/dialogs/*" element={<Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}/>}/>*/}
                        {/*<Route path="/profile/*" element={<Profile posts={props.state.profilePage.posts}/>}/>*/}
                        <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage}/>}/>
                        <Route path="/profile/*" element={<Profile state={props.state.profilePage}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
