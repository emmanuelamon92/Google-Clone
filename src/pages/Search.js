import React from 'react'
import './Search.css'
import { Search as SearchIcon, Mic as MicIcon } from '@mui/icons-material';
import { Button } from '@mui/material'


function Search() {
    return (
        <div className='search'>
            <div className='search__input'>
                <SearchIcon className='search__inputIcon' />
                <input />
                <MicIcon />
            </div>

            <div className='search__buttons'>
                <Button varient='outlined'>Google Search</Button>
                <Button varient='outlined'>I'm Feeling Lucky</Button>
            </div>
        </div>

    )
}

export default Search
