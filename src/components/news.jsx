import React, { useState, useEffect } from "react";
import newsData from "../data/news.json";
import { Link, useParams } from "react-router-dom";
import TextWithDiv from "../libs/divtext";

export default function NewsPage() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(newsData);
  }, []);
  const newsId = useParams().id;
  const newsEditData = newsData.find((article) => {
    return article.id === newsId;
  });

  if (!newsId) {
    return (
      <div className="news-page">
        <h1>Dernières actualités</h1>
        <div className="news-page-card">
          {news.map((article) => (
            <div className="news-page-item" key={article.id}>
              <Link to={"/news/" + article.id}>
                <img src={article.image} alt="" />
                <h2>{article.title}</h2>
                <p>{article.subtitle}</p>
                <p>Publié le {article.publishedDate}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="news-edit">
        <Link to="/news">{"< "}Retour aux news</Link>
        <h2>{newsEditData.title}</h2>
        <img src={newsEditData.image} alt="" />
        <TextWithDiv text={newsEditData.content} maxLength={400} />
      </div>
    );
  }
}
