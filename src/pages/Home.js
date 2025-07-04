import React, { useState, useEffect } from "react";
import axios from "axios";
import QuoteCard from "../components/QuoteCard";
import "./Home.css";

const Home = () => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://api.quotable.io/random");
      setQuote(response.data);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="home-container">
      <h1>📖 Daily Quote Generator</h1>
      {loading ? <p>Loading...</p> : <QuoteCard quote={quote} />}
      <button className="new-quote-btn" onClick={fetchQuote}>
        🔄 New Quote
      </button>
    </div>
  );
};

export default Home;
