import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from '../NewsItem/NewsItem'
import Spinner from '../Spinner/Spinner';
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {


  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
   
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      total_articles:[],
      loading: false,
      page: 1,
      totalres: 0,
      
    }
    document.title = `${this.capitalize(this.props.category)}-Flash Feed`;
  }

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async componentDidMount() {
    

    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    
    

    let data = await fetch(url);
    let parsedData = await data.json();  
    console.log(parsedData);

    this.setState({ articles: parsedData.articles ,totalres: parsedData.totalResults, loading: false });

    let urlTotal=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=100`;;

      let dataTotal = await fetch(urlTotal);
      let parsedDataTotal = await dataTotal.json();
      console.log(parsedDataTotal)
      this.setState({ total_articles:parsedDataTotal.articles});
   
    
  }
  // handleNextClick = async () => {
  //   this.setState({ loading: true });
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
    
  //   this.setState(
  //     {
  //       articles: parsedData.articles,
  //       page: this.state.page + 1,
  //       loading: false
  //     });

  // }
  // handlePreviousClick = async () => {
  //   this.setState({ loading: true });
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   // console.log(parsedData);
  //   this.setState(
  //     {
  //       articles: parsedData.articles,
  //       page: this.state.page - 1,
  //       loading: false
  //     });
  // }

  fetchMoreData =async() => {
    
     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({articles:this.state.articles.concat(parsedData.articles),
      totalres:parsedData.totalResults,
      page:this.state.page+1,
    });
    
  };

  async componentDidUpdate(prevProps) {

    if ((prevProps.category !== this.props.category) && (prevProps.searchQuery!== this.props.searchQuery)) {
      let urlTotal=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=100`;;

      let dataTotal = await fetch(urlTotal);
      let parsedDataTotal = await dataTotal.json();

      this.setState({ total_articles:parsedDataTotal.articles});
    }
    
   
 };

 
  
  render() {

    return (
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">TOP {this.props.category.toUpperCase()} HEADLINES</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
          </div>
          {this.state.loading&&<Spinner/>}
          
            {this.props.searchQuery===''?<InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length !== this.state.totalres}
              loader={<Spinner/>}
            >
              <div className='container'>
              <div className="flex flex-wrap -m-4">
                {this.state.articles.filter((item)=>{
                  return this.props.searchQuery ===''?item:item.title.toLowerCase().includes(this.props.searchQuery)
                }).map((element) => {
                  return <NewsItem imageurl={element.urlToImage} title={element.title ? element.title.slice(0, 88) : ""} description={element.description ? element.description.slice(0, 226) : ""} key={element.url} detailurl={element.url} author={element.author} date={element.publishedAt} />

                })}

              </div>
              </div>
            </InfiniteScroll>:
              <div className="flex flex-wrap -m-4">
                {this.state.total_articles.filter((item)=>{
                  return this.props.searchQuery ===''?item:item.title.toLowerCase().includes(this.props.searchQuery)
                }).map((element) => {
                  return <NewsItem imageurl={element.urlToImage} title={element.title ? element.title.slice(0, 88) : ""} description={element.description ? element.description.slice(0, 226) : ""} key={element.url} detailurl={element.url} author={element.author} date={element.publishedAt} />

                })}
        
              </div>
              }
          
          

        </div>
      </section>
    )
  }
}

export default News
