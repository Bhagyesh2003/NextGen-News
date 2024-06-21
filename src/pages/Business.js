import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

const Business = () => {
  const [mynews, setMyNews] = useState([]);

  const fetchData = async () => {
    let res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    );
    let data = await res.json();
    setMyNews(data.articles);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
     <Navbar />
      <div className="styling">
        {mynews.map((ele) => {
          console.log(ele);
          return (
            <>
              <div
                className="card"
                style={{
                  width: "300px",
                  height: "400px",
                  marginLeft: "8rem",
                  marginTop: "2rem",
                }}
              >
                <img
                  src={
                    ele.urlToImage == null
                      ? "https://img.freepik.com/free-vector/news-report-concept-background-design_1017-14197.jpg?size=626&ext=jpg"
                      : ele.urlToImage
                  }
                  className="card-img-top"
                  height="200px"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {ele.author == null ? "No Author" : ele.author}
                  </h5>
                  <p className="card-text">{ele.title}</p>
                  <a href={ele.url} target="_blank" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Business