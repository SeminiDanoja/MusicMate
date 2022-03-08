import React from 'react';
import {FaRegClock, FaHeart,FaPlay} from "react-icons/fa"

function AudioList() {
  return (
    <div className='audioList'>
        <div className='headings'>
            <div className='songCount'>
                <p>#</p>
                <p className='title'>Title</p>
            </div>            
            <div className='artistName'>
                <p>Artist</p>
            </div>
            <div className='time'>
                <i>
                    <FaRegClock />
                </i>
            </div>
        </div>
        <div className='songContainer'>
            <div className='songs'>
                <div className='count'><p>1</p>
                    <i>
                        <FaPlay />
                    </i>
                </div>

                <div className='song'>

                    <div className='imgBox'>
                        <img src='' alt='' />
                    </div>
                    <div className='sections'>
                        <p className='songName'>
                            Take Me On
                            <span className='spanArtist'>Artist Name</span>
                        </p>

                        <div className='hits'>
                            <div className='favourite'>
                                <i>
                                    <FaHeart />
                                </i>
                            </div> 

                            <p className='duration'>
                                03.04
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export { AudioList };
