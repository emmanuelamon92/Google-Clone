import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';

function home() {
    return (
        <div className='home'>
            <h1>This is Homepage</h1>
            <div className='home__header'>
                <div className='home__headerLeft'>
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className='home__headerRight'>
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    {/* Icon */}
                    {/* Avatar (Material UI) */}
                </div>
            </div>

            <div className='home__body'>

            </div>
        </div>
    )
}

export default home
