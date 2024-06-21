import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

const Business = () => {
  const [mynews, setMyNews] = useState([]);

  const fetchData = async () => {
    let res = await fetch(
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=19cdd0eaab164db7a625c6326ffe6ccb"
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
                      ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO1WdIW2im6TWTKabcsokQuPJtQ7KpWB_z6g&s"
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