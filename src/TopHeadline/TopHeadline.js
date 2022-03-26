import React, { useEffect, useState } from 'react';
import News from '../Components/News/News';


const TopHeadline = () => {
    const [news ,setNews] =useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-02-26&sortBy=publishedAt&apiKey=6127611637af478cb9d14bde2ee9cf7e')
    .then(res => res.json())
    .then(data => {
      setNews(data.articles);
      console.log(data.articles)
      
    }
    )
  },[])

    return (
        <div>
             <h2>Top Headline: {news.length}</h2>
             {
                 news.map( news => <News news={news}></News>)
             }
        </div>
    );
};

export default TopHeadline;