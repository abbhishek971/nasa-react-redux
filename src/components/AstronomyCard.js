import React from 'react';


const AstronomyCard = (props) => {
  const { title, url, hdurl, explanation, date } = props.data;
  return(
    <div className="astronomy-card">
      <h2 className="astronomy-title">{title}</h2>

      <a href={hdurl} className="astronomy-image-wrapper">
        <img src={url} alt={title} />
      </a>

      <p className="astronomy-explanation">{explanation}</p>

      <span className="astronomy-date"><em>{date}</em></span>
    </div>
  )
}

export default AstronomyCard;
