import {useEffect, useState} from 'react'

const API_KEY = process.env.API_KEY

const CONTEXT_KEY = "0d879680507ba0b85"

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?keys=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
                .then(res => res.json())
                .then(data => {
                    setData(data)
                })
        }

        fetchData();
    }, [term])

    return { data }
};

export default useGoogleSearch
