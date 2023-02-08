import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Loading from './Loading';
import Navbar from './Navbar';
import Footer from './Footer'
import News from './News';

function Card() {

    const apikey = "fe57396c3a154c7cbac34a95d94a17c5"
    const [articles, setArticles] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('us')
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const result = await axios(
                `https://newsapi.org/v2/top-headlines?country=${selectedCountry}&apiKey=${apikey}`
            );
            setArticles(result.data.articles);
            setIsLoading(false)
        };
        fetchData();
    }, [selectedCountry]);

    return (
        <>

            <Navbar />

            <nav class="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
                <div class="container-fluid w-full flex flex-wrap items-center justify-between ">
                    <div class="container-fluid">
                        <ul className="px-16 flex flex-row justify-start space-x-3 lg:justify-start my-2 md:text-3xl md:space-x-5 md:font-light lg:text-lg hover:underline font-serif">
                            <span className='font-extrabold text-gray-700 px-5 no-underline'>Top News </span>
                            <li>
                                <button className='hover:underline hover:text-blue-500' onClick={() => setSelectedCountry('fr')} style={{ "WebkitTapHighlightColor": "transparent" }}>France</button>
                            </li>
                            <li>
                                <button className='hover:underline hover:text-blue-500' onClick={() => setSelectedCountry('gb')} style={{ "WebkitTapHighlightColor": "transparent" }}>uk</button>
                            </li>
                            <li>
                                <button className='hover:underline hover:text-blue-500' onClick={() => setSelectedCountry('us')} style={{ "WebkitTapHighlightColor": "transparent" }}>usa</button>
                            </li>
                            <li>
                                <button className='hover:underline hover:text-blue-500' onClick={() => setSelectedCountry('au')} style={{ "WebkitTapHighlightColor": "transparent" }}>australia</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {isLoading ? <Loading /> : <News data={articles} />}

            <Footer />
        </>
    )
}

export default Card;