import axios from 'axios';
import React, { useState, useEffect } from 'react'

function Card() {

    //Api fetch
    const [articles, setArticles] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('us')
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `https://newsapi.org/v2/top-headlines?country=${selectedCountry}&apiKey=_______YOUR_API_KEY_________`

            );
            setArticles(result.data.articles);
        };
        fetchData();
    }, [selectedCountry]);


    return (
        <>
            <div className="flex justify-center py-10">
                <ul className="md:flex flex-row space-x-4 text-gray-700 text-4xl font-semibold hover:underline hover:text-purple-800">
                    <li>
                        <button className='px-4 font-mono hover:text-red-600' onClick={() => setSelectedCountry('gb')}>uk</button>
                    </li>
                    <li>
                        <button className='px-4  font-mono hover:text-blue-600' onClick={() => setSelectedCountry('fr')}>France</button>
                    </li>
                    <li>
                        <button className='px-4 font-mono hover:text-yellow-400' onClick={() => setSelectedCountry('us')}>us</button>
                    </li>
                    <li>
                        <button className='px-4 font-mono hover:text-green-500' onClick={() => setSelectedCountry('au')}>australia</button>
                    </li>
                </ul>
            </div>

            {articles.map((article) => (
                <div key={article.url} id='1'>
                    <div className='flex justify-center py-4 lg:grid-cols-3'>
                        <div className="rounded overflow-hidden shadow-lg w-4/5 lg:w-2/4">
                            <img src={article.urlToImage} alt="Failed to load" />
                            <div className="px-6 py-6">
                                <p className="text-gray-700 text-6xl font-mono font-semibold">{article.title}</p>
                                <a href={article.url}>
                                    <p className='font-bold hover:underline font-serif text-5xl py-14 hover:underline-offset-4'>Read more</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Card