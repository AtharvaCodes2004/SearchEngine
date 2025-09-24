import React, { createContext, useContext, useState } from 'react'

const ResultContext = createContext();
const baseUrl = 'https://google-search72.p.rapidapi.com';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isloading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (type) => {
        setIsLoading(true);
        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            //mode: 'no-cors',
            // url: 'https://google-search72.p.rapidapi.com',
            headers: {
                'X-RapidAPI-Key': '4a10620380mshd356845c58abde7p1c57fcjsn96338a89f3d6',
                'X-RapidAPI-Host': 'google-search-2.p.rapidapi.com'
            },
            
        })
        console.log(response)
        const data = await response.json();
        
        
        console.log(data);
        
        //     setResults(data);
        //     setIsLoading(false);
        
    }
    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isloading }}>
            {children}
        </ResultContext.Provider>
    )
};

export const useResultContext = () => useContext(ResultContext);

//${type}
// 'Access-Control-Allow-Origin': '*',
// "content-type": "application/json",
// "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
// "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZyQxmYpQTo6FHLmcHLGfvVkIOE0%2FHaKwClivWNusX2J%2BFrJc9Ma4jaKSkt0l%2BlcBS2HznKZHH57HcZPh%2FCBsipHGikzWwqGRrkjH%2ByOHXqIEYlIlFyJp6qW6%2Bv1ckv5DoFJ3CQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
// "server": "RapidAPI-1.2.8",
// "vary": "Accept-Encoding,User-Agent",
// "x-rapidapi-region": "AWS - ap-southeast-1",
// "x-rapidapi-version": "1.2.8",
// "x-turbo-charged-by": "LiteSpeed"
// 'x-user-agent' : 'desktop',