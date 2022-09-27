import React from "react";

const Search = ({ handleSearchNote }) => {
   return (
   <div className="search">
      <input
      type="text"
      required='required'
      id='search'
      onChange={(event) => 
         handleSearchNote(event.target.value)
      }
      placeholder="Search for note.."
      ></input>
   </div>
   );

};

export default Search;