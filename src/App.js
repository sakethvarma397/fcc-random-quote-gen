import React, { useState } from "react";
import useHook from "./useHook";

var colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

const App = () => {
  const [currentQuote, setQuote] = useState("");
  const { quotes } = useHook();

  const getRandomQuote = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    document.body.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
  };

  if (quotes.length && !currentQuote) {
    getRandomQuote();
  }

  return (
    <div id="wrapper">
      {quotes.length ? (
        <div id="quote-box">
          <div id="text">{currentQuote.quote}</div>
          <div id="author"> -{currentQuote.author}</div>
          <div className="buttons">
            <button id="new-quote" onClick={getRandomQuote}>
              New Quote
            </button>
            <button id="tweet-button">
              <a id="tweet-quote" href="twitter.com/intent/tweet">
                Tweet
              </a>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default App;
