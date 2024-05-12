import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import NewsItem from '../NewsItem/NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from '../Spinner/Spinner';



const News = (props) => {



  const [articles, setArticles] = useState([]);
  const [total_articles, setTotal_articles] = useState([]);
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [total_res, setTotal_res] = useState(0)




  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const mount = async () => {
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${ page}&pageSize=${props.pageSize}`;


    let data = await fetch(url);
    let parsedData = await data.json();
    
    setArticles(parsedData.articles);
    setLoading(false);
    setTotal_res(parsedData.totalResults);

    let urlTotal = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=100`;;

    let dataTotal = await fetch(urlTotal);
    let parsedDataTotal = await dataTotal.json();
    
    setTotal_articles(parsedDataTotal.articles);
  }

  useEffect(() => {
    mount();
  }, [])




  const fetchMoreData = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${ page + 1}&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles));
    setTotal_res(parsedData.totalResults)
    setPage(page+1);

  };

  
  

  useEffect(() => {
   const fetchData = async() => {
    let urlTotal = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=100`;;

    let dataTotal = await fetch(urlTotal);
    let parsedDataTotal = await dataTotal.json();
    setTotal_articles(parsedDataTotal.articles);
   }
   fetchData();
   document.title = `${capitalize(props.category)}-Flash Feed`;
     
  }, [props.category,props.searchQuery])
  
  




  return (
    <section className="text-gray-600 body-font ">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">TOP {props.category.toUpperCase()} HEADLINES</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
        </div>
        { loading && <Spinner/>}

        {props.searchQuery === '' ? <InfiniteScroll
          dataLength={ articles.length}
          next={fetchMoreData}
          hasMore={ articles.length !==  total_res}
          loader={<Spinner />}
        >
          <div className='container'>
            <div className="flex flex-wrap -m-4">
              { articles.filter((item) => {
                return props.searchQuery === '' ? item : item.title.toLowerCase().includes(props.searchQuery)
              }).map((element) => {
                return <NewsItem imageurl={element.urlToImage} title={element.title ? element.title.slice(0, 88) : ""} description={element.description ? element.description.slice(0, 226) : ""} key={element.url} detailurl={element.url} author={element.author} date={element.publishedAt} />

              })}

            </div>
          </div>
        </InfiniteScroll> :
          <div className="flex flex-wrap -m-4">
            { total_articles.filter((item) => {
              return props.searchQuery === '' ? item : item.title.toLowerCase().includes(props.searchQuery)
            }).map((element) => {
              return <NewsItem imageurl={element.urlToImage} title={element.title ? element.title.slice(0, 88) : ""} description={element.description ? element.description.slice(0, 226) : ""} key={element.url} detailurl={element.url} author={element.author} date={element.publishedAt} />

            })}

          </div>
        }



      </div>
    </section>
  )
}

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',

}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}



export default News
