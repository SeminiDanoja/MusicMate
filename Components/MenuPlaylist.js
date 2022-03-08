import React from 'react';
import { MdQueueMusic } from "react-icons/md";
import { PlayList } from "./PlayList"

function MenuPlaylist() {
  return  (
    <div className="playlistContent">
      <div className='nameContainer'>
          <p>Playlist</p>
      </div>
      <div className='playlistScroll'>
        {PlayList && 
          PlayList.map((list) => (
            <div className='playList'>
              <i className='list'>
                <MdQueueMusic />
              </i>
                        
                <p>Sample Name</p>

            </div>
        ))}

      </div>
    </div>
);
}

export { MenuPlaylist };
