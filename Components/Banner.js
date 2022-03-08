import React from 'react';
import Artist from '../images/Artist.jpg';
import { CgPlayButtonO } from "react-icons/cg"

function Banner() {
  return (
    <div className='banner'>
      <img src={Artist} alt="" className='bannerImg' />

      <div className='content'>

        <div className='artist'>
          <div className='left'>
            
            <div className='name'>
              <h2>Song Name</h2>
            </div>
            <p>Artist Name</p>

          </div>
          <div className='right'>
            <a href='#'>
              <i>
                <CgPlayButtonO />
              </i>
            </a>
          </div>
        </div>
        
      </div>

      <div className='bottomLayer'></div>
    </div>
  );  
}

export { Banner };
