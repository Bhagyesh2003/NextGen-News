import React, { useEffect, useState } from "react";
import "./NewsCard.css";
import Pagination from "./Pagination";
import Navbar from "./Navbar";
import { Spinner } from "react-bootstrap";

// Newscard component definition
const NewsCard = () => {
  // State variables
  const [mynews, setMyNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);

  // Function to fetch data from the API
  const fetchData = async (page, query = "") => {
    setLoading(true);
    setError(null); // Reset any previous errors

    // Determine the API URL based on the presence of a search query
    let url = query
    ? `https://newsapi.org/v2/everything?q=${query}&page=${page}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    : `https://newsapi.org/v2/top-headlines?country=in&page=${page}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.articles) {
        setMyNews(data.articles);
        setTotalPages(Math.ceil(data.totalResults / 20));
      } else {
        throw new Error("Failed to fetch articles");
      }
    } catch (error) {
      setError(error.message);
      setMyNews([]);
      setTotalPages(0);
    } finally {
      setLoading(false);
    }
  };

  // Effect to fetch data when currentPage or searchQuery changes
  useEffect(() => {
    fetchData(currentPage, searchQuery);
  }, [currentPage, searchQuery]);

  // Handler for next page button click
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  // Handler for previous page button click
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  //Handler for search query
  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page on new search
  };

  return (
    <>
      {/* Navbar with search functionality */}
      <Navbar onSearch={handleSearch} />
      <div className="styling">
        {/* Show loading spinner */}
        {loading ? (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : error ? (
          // Show error message if fetch fails
          <div className="d-flex justify-content-center text-danger">
            <p>{error}</p>
          </div>
        ) : mynews && mynews.length > 0 ? (
          // Show articles if data is available
          mynews.map((ele, index) => {
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
                  <a
                    href={ele.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Read More
                  </a>
                </div>
              </div>
            );
          })
        ) : (
          <div className="d-flex justify-content-center">
            <p>No articles found</p>
          </div>
        )}
      </div>
      <br />
      {/* Pagination component */}
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

export default NewsCard;
