import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";

const Technology = () => {
  const [mynews, setMyNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchData = async (page) => {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&page=${page}&category=technology&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    );
    const data = await res.json();
    setMyNews(data.articles);
    setTotalPages(Math.ceil(data.totalResults / 20));
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
    <Navbar />
      <div className="styling">
        {mynews.map((ele, index) => {
          return (
            <div
              key={index}
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
                <a href={ele.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <br />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
      <br />
    </>
  );
};

export default Technology;
