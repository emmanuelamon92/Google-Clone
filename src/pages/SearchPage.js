import React from 'react';
import './SearchPage.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
// import useGoogleSearch from '../useGoogleSearch';
import Response from '../response';
import Search from './Search';
import { Search as SearchIcon, Description as DescriptionIcon, Image as ImageIcon, LocalOffer as LocalOfferIcon, Room as RoomIcon, MoreVert as MoreVertIcon } from '@mui/icons-material';

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    // LIVE API CALL
    // const { data } = useGoogleSearch(term);
    
    // MOCK LIVE API CALL FROM response.js
    const data = Response;
    //https://developers.google.com/custom-search/v1/introduction#identify_your_application_to_google_with_api_key

    //https://cse.google.com/cse/create/new

    console.log('data >>',data)
    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                    <img className="searchPage__logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=""/>
                </Link>
            
                <div className="searchPage__headerBody">
                    <Search hideButtons />
                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage__option">
                                <DescriptionIcon />
                                <Link to="/news">News</Link>
                            </div>
                            <div className="searchPage__option">
                                <ImageIcon />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="searchPage__option">
                                <LocalOfferIcon />
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="searchPage__option">
                                <RoomIcon />
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className="searchPage__option">
                                <MoreVertIcon />
                                <Link to="/more">More</Link>
                            </div>
                        </div>
                        <div className="searchPage__optionsRight">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPage
