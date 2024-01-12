import React from 'react';
import '../css/Title.scss'
import { FaSearch } from "react-icons/fa";

const Title = ({setSearch,search,setDatePicker,datePicker}) => {
    return (
        
        <div className='Title'>
            <div className="search">
            <div class="searchBox">
                <button class="searchButton" href="#">
                    <i class="material-icons">
                    <FaSearch className='search-icon'/> 
                    </i>
                </button>
                <input class="searchInput" type="text" name="" placeholder="Search"  value={search} onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <span className='date'>
            <input type="date" id="datepicker" name="datepicker"  value={datePicker} onChange={(e) => setDatePicker(e.target.value)}/></span>
            </div>
            
        </div>
    );
}

export default Title;
