import React from 'react'
import './Search.css'
import { Search as SearchIcon, Mic as MicIcon } from '@mui/icons-material';


function Search() {
    return (
        <div className='search'>
            <div className='search__input'>
                <SearchIcon className='search__inputIcon' />
                <input />
                <MicIcon />
            </div>
        </div>
    )
}

export default Search
