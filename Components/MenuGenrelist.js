import React from 'react';
import { FaPlus } from "react-icons/fa";
import { GiMusicalNotes } from "react-icons/gi";
import { BsTrash } from "react-icons/bs";
import { GenreList } from "./GenreList";

function MenuGenrelist() {
  return (
      <div className="genreListContent">
        <div className='nameContainer'>
            <p>Genres</p>
            <i>
                <FaPlus />
            </i>
        </div>
        <div className='genreListScroll'>
            {GenreList && 
                GenreList.map((genre) => (
                    <div className='genreList'>
                        <i className='genre'>
                            <GiMusicalNotes />
                        </i>
                        
                        <p>Sample Name</p>

                        <i className='trash'>
                            <BsTrash />
                        </i>
                    </div>
            ))}

        </div>
      </div>
  );
}

export { MenuGenrelist };
