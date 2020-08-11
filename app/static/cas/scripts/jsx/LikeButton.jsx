import { useState } from 'react';

const LikeButton = (props) => {

  const [liked, setLiked] = useState(false);

  if (liked) {
    return 'You liked this';
  }

  return (
    <button className="button is-primary" onClick={props.onClick}>
      Like
    </button>
  );
}

export default LikeButton;
