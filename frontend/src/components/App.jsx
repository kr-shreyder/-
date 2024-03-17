import './App.scss'
import React, {useState} from 'react'
import Header from './Header/Header';
import Home from '../views/Home/Home';
import Profile from '../views/Profile/Profile'
import Catalog from '../views/Catalog/Catalog'
import TeamsPage from '../views/TeamsPage/TeamsPage'
import Auth from '../views/Auth/Auth'
import PostForm from '../views/PostForm/PostForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from '../views/Registration/Registration';
import MenuWindow from './MenuWindow/MenuWindow';
import { useTheme } from '../hooks/useTheme';

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div className="app">
      {isMenuOpen && <div className="jumbo jumbo--dark"></div>}
      <BrowserRouter>
        <div className={isMenuOpen ? "screen screen--left" : "screen"}>
          <Header openMenu={openMenu} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/games" element={<Catalog />} />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/post-form" element={<PostForm />} />
          </Routes>
          <Footer />
        </div>
        <MenuWindow isOpen={isMenuOpen} closeMenu={closeMenu} />
      </BrowserRouter>
    </div>
  );
};

export default App;
