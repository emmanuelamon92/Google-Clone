import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../StateProvider';

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    //https://developers.google.com/custom-search/v1/introduction#identify_your_application_to_google_with_api_key

    const api_key = process.env.API_KEY

    //https://cse.google.com/cse/create/new
    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <h1>{term}</h1>
            </div>
            <div className="searchPage__results">
            
            </div>
        </div>
    )
}

export default SearchPage
