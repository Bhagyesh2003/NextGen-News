import React, { useState } from "react";

// Navbar component definition
const Navbar = ({ onSearch }) => {
  //state to hold the search query
  const [query, setQuery] = useState("");

  //Handle input change and update the state with the current query
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Handle form submission and call the onSearch function passed as a prop
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <b>
              NextGen <span className="text-info">News</span>
            </b>
          </a>

          {/*Navbar elements for different categories of news */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="./business">
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="./entertainment"
                >
                  Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="./health">
                  Health
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="./science">
                  Science
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="./sports">
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="./technology">
                  Technology
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleFormSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={query}
                onChange={handleInputChange}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
