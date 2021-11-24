import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
// import AppsIcon from '@mui/icons-material/Apps';

function home() {
    return (
        <div className='home'>
            <div className='home__header'>
                <div className='home__headerLeft'>
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className='home__headerRight'>
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    {/* <AppsIcon /> */}

                    {/* Icon */}
                    {/* Avatar */}
                </div>
            </div>

            <div className='home__body'>

            </div>
        </div>
    )
}

export default home
