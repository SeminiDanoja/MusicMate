import React from 'react';
import "../Styles/LeftMenu.css";
import logo from "../images/logo.png";

import { BiSearchAlt } from 'react-icons/bi';
import { MenuGenrelist } from './MenuGenrelist';
import { MenuPlaylist } from './MenuPlaylist';
import { TrackList } from './TrackList';

function LeftMenu() {
  return <div className='LeftMenu'>
    <div className='logoContent'>
      <img src={require('../images/logo.png')} alt='logo'></img>
      <h2>Music Mate</h2>
    </div>
    <div className='searchBox'>
      <input type='text' placeholder='Search...'/>
      <i className='searchIcon'>
        <BiSearchAlt />
      </i>
    </div>

    <div>
      <MenuPlaylist />

      <MenuGenrelist />

      <TrackList />
    </div>
  </div>
}

export { LeftMenu };
