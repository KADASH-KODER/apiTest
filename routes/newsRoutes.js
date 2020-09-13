
const router = require('express').Router()


const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('703df4c0daf8488ebf80d33abf02edc0')   //It creates a new instance of NewsAPI. Just like we use Date(). Remember that to create a new date we use "const date = new Date()", it works just like JavaScript Date.


router.get('/news', async (req, res)=>{
  
    // fetching news from the NewsAPI
    const newsResponse = await newsapi.v2.topHeadlines({
      country: 'in', 
      category: 'technology'
    });
  
    res.json(newsResponse);  
  })
  
  