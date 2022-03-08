import React from 'react';
import "../Styles/MainContainer.css";
import { AudioList } from './AudioList';
import { Banner } from './Banner';

function MainContainer() {
  return <div className='mainContainer'>

    <Banner />
    <AudioList />
      
  </div>;
}

export { MainContainer };
