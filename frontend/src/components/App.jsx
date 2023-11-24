import './App.scss'
import React from 'react'
import Header from './Header/Header';
import Home from '../views/Home/Home';
import Profile from '../views/Profile/Profile'
import Catalog from '../views/Catalog/Catalog'
import TeamsPage from '../views/TeamsPage/TeamsPage'
import Auth from '../views/Auth/Auth'
import PostForm from '../views/PostForm/PostForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from '../views/Registration/Registration';

const App = () => {    
    return (
        <div className='app'>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/catalog" element={<Catalog/>}/>
                    <Route path="/teams" element={<TeamsPage/>}/>
                    <Route path="/auth" element={<Auth/>}/>
                    <Route path="/register" element={<Registration/>}/>
                    <Route path="/post-form" element={<PostForm/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;