import React, {useState} from 'react'
import './Search.css'
import { Search as SearchIcon, Mic as MicIcon } from '@mui/icons-material';
import { Button } from '@mui/material'


function Search() {
    const [input, setInput] = useState('')

    const search = e => {
        e.preventDefault();

        console.log('you hit the search button >>', input)
    }
    return (
        <form className='search'>
            <div className='search__input'>
                <SearchIcon className='search__inputIcon' />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>

            <div className='search__buttons'>
                <Button type='submit' onClick={ search } varient='outlined'>Google Search</Button>
                <Button varient='outlined'>I'm Feeling Lucky</Button>
            </div>
        </form>

    )
}

export default Search
