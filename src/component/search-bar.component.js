import React, { Component } from 'react';
import "../asset/styles/search-bar.style.css";

const SearchBarComponent = ({onSearch}) =>  {
    return (
        <form className="example search-bar" >
            <input 
                type="text"   
                placeholder="Search.." 
                name="search" 
                id="searchInput"
                onKeyUp={
                    (event) => {
                        onSearch(event.target.value);
                    }
                }/>
            <button 
                onClick={
                    () => {
                        const searchText = document.getElementById("searchInput").value
                        onSearch(searchText);
                    }
                }
                type="button">
                <i className="fa fa-search"></i>
            </button>
        </form>
    );
}

export { SearchBarComponent };
