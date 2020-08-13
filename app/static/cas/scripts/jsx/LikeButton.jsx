import React, { useState } from 'react';

export const LikeButton = () => {

  const [liked, setLiked] = useState(false);

  if (liked) {
    return 'You liked this';
  }

  return (
    <button className="button is-primary" onClick={ () => setLiked(true) }>
      Like
    </button>
  );
}

module.exports = LikeButton;
