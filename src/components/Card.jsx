import axios from 'axios';
import React, { useState, useEffect } from 'react'

function Card() {

    //Api fetch
    const [articles, setArticles] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('us')
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `https://newsapi.org/v2/top-headlines?country=${selectedCountry}&apiKey=fe57396c3a154c7cbac34a95d94a17c5`

            );
            setArticles(result.data.articles);
        };
        fetchData();
    }, [selectedCountry]);


    return (
        <>

            {/* countries selection */}
            <div className="flex justify-center md:py-10 lg:py-5">
                <ul className="md:flex flex-row space-x-4 text-gray-700 md:text-4xl lg:text-2xl font-semibold hover:underline hover:text-purple-800">
                    <li>
                        <button className='px-4 font-mono hover:text-red-600' onClick={() => setSelectedCountry('gb')} style={{ "WebkitTapHighlightColor": "transparent" }}>uk</button>
                    </li>
                    <li>
                        <button className='px-4  font-mono hover:text-blue-600' onClick={() => setSelectedCountry('fr')} style={{ "WebkitTapHighlightColor": "transparent" }}>France</button>
                    </li>
                    <li>
                        <button className='px-4 font-mono hover:text-yellow-400' onClick={() => setSelectedCountry('us')} style={{ "WebkitTapHighlightColor": "transparent" }}>usa</button>
                    </li>
                    <li>
                        <button className='px-4 font-mono hover:text-green-500' onClick={() => setSelectedCountry('au')} style={{ "WebkitTapHighlightColor": "transparent" }}>australia</button>
                    </li>
                </ul>
            </div>

            {/* black line */}
            <div className="mx-10 my-5">
                <hr className="w-full md:p-2 lg:p-1 bg-black"></hr>
            </div>

            {/* card */}
            <div className='grid lg:grid-cols-3 gap-2 lg:text-lg md:text-6xl mb-10'>
                {articles.map((article) => (
                    <div key={article.url} id='1'>
                        <div className='flex justify-center py-4 lg:grid-cols-3'>
                            <div className="rounded overflow-hidden shadow-lg w-4/5 ">
                                <div className='flex justify-center'>
                                    <img src={article.urlToImage} alt="Failed to load" />
                                </div>
                                <div className="px-6 py-6">
                                    <p className="text-gray-700 font-mono font-semibold">{article.title}</p>
                                    <span className='font-semibold md:text-3xl lg:text-xs text-red-600'>{article.publishedAt}</span>
                                    <a href={article.url} style={{ "WebkitTapHighlightColor": "transparent" }}>
                                        <p className='font-bold hover:underline font-serif text-5xl lg:text-xl py-14 hover:underline-offset-4'>Read more</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Card