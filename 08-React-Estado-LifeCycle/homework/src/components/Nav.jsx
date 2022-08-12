import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({ onSearch }) {
  return (
    <div>
      <img src={Logo} alt="Henry-Logo" />
      <span>Henry Weather App</span>
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
        </a>
        <SearchBar onSearch={onSearch} />
      </nav>
    </div>
  );
};

export default Nav;
