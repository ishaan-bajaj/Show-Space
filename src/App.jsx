import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowList from "./components/ShowList/ShowList";
import Header from "./components/Header/Header";
import ShowDetails from "./components/ShowDetails/ShowDetails";
import "./index.css";

const App = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<ShowList shows={shows} />} />
            <Route path="/show/:id" element={<ShowDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
