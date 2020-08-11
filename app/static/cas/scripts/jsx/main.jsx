import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// var LikeButton = require('./LikeButton.jsx');

const LikeButton = () => {

  const [liked, setLiked] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/test')
      .then(response => {
        console.log(response);
        return response.json()
      })
      .then(data => {
        console.log(data)
        setData(data);
      });
  }, [liked]);

  return (
    <div>
      <button className="button is-primary" onClick={ () => setLiked(!liked) }>Like</button>
      { liked ? <p> {data.id} </p> : null }
    </div>
  );
}

ReactDOM.render(
  <LikeButton />,
  document.getElementById('main')
);
