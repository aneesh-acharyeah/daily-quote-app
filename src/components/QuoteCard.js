import React from "react";
import "./QuoteCard.css";

const QuoteCard = ({ quote }) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(`"${quote.content}" - ${quote.author}`);
        alert("📋 Quote copied to clipboard!");
    };

    const tweetQuote = () => {
        const tweetUrl = `https://twitter.com/intent/tweet?text="${quote.content}" - ${quote.author}`;
        window.open(tweetUrl, "_blank");
    };

    return (
        <div className="quote-card">
            <p className="quote-content">
                “{quote?.content || "No quote available"}”
            </p>
            <p className="quote-author">
                {quote?.author ? `— ${quote.author}` : ""}
            </p>

            <div className="quote-actions">
                <button onClick={copyToClipboard}>📋 Copy</button>
                <button onClick={tweetQuote}>🐦 Tweet</button>
            </div>
        </div>
    );
};

export default QuoteCard;
