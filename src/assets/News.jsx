import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${props.page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    // console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsBite`;
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    setPage({ page: page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      props.page + 1
    }&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };
  // handlePrevClick = async () => {
  //   if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
  //   } else {
  //     let url = `https://newsapi.org/v2/everything?q=tesla&from=2022-12-21&sortBy=publishedAt&apiKey=82e124dbd5b541e699bfbab445d1d61c&page-${
  //       this.state.page - 1
  //     }&pageSize=20`;
  //     let data = await fetch(url);
  //     let parsedData = await data.json();
  //     console.log(parsedData);
  //     this.setState({
  //       articles: parsedData.articles,
  //       totalResults: parsedData.totalResults,
  //     });
  //   }
  // };
  // handleNextClick = async () => {
  //   if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
  //   } else {
  //     let url = `https://newsapi.org/v2/everything?q=tesla&from=2022-12-21&sortBy=publishedAt&apiKey=82e124dbd5b541e699bfbab445d1d61c&page-${
  //       this.state.page + 1
  //     }&pageSize=20`;
  //     let data = await fetch(url);
  //     let parsedData = await data.json();
  //     console.log(parsedData);
  //     this.setState({
  //       articles: parsedData.articles,
  //       totalResults: parsedData.totalResults,
  //     });
  //   }
  // };

  return (
    <div className="flex flex-wrap justify-center container my-3 bg-slate-200 items-center">
      <div className="loader flex flex-col">
        <h2 className="flex text-center font-semibold text-gray-700 p-5 text-[2rem] mt-14">
          NewsBite - Top {capitalizeFirstLetter(props.category)} Headlines
        </h2>
        {loading && <Spinner />}
      </div>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        // hasMore={articles.length !== totalResults}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="row columns-3 m-1 flex flex-row flex-wrap justify-center w-auto md:space-x-5">
          {/* {articles.slice(0, 15).map((element) => { */}
          {articles.map((element, index) => {
            return (
              <div className=" col-md-4 my-5" key={index}>
                <NewsItem
                  key={element.url}
                  // title={element.title ? element.title.slice(0, 45) : ""}
                  title={element.title}
                  // description={
                  // element.description ? element.description.slice(0, 88) : ""
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  publishedAt={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
      {/* <div className="container2 flex justify-center">
          <button className="bg-white hover:bg-black text-black hover:text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow m-5 ">
            load more
          </button>
        </div> */}
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
