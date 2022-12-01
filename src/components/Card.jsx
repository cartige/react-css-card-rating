import "./card.scss";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

export default function Card() {
  const stars = Array(5).fill(0);
  const [currVal, setCurrVal] = useState(0);
  const [hoverVal, setHoverVal] = useState(undefined);

  const handleClick = (value) => setCurrVal(value);
  const handleMouseOver = (value) => setHoverVal(value);
  const handleMouseLeave = () => setHoverVal(undefined);

  return (
    <>
      <div className="card">
        <div className="card-header">
          <img
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/skull-astronaut-cover-art-design-template-35c3e4d9b8f07aa2d7f79eb9b33c00b1_screen.jpg?ts=1668465837"
            alt=""
          />
          <div className="card-content">
            <h1 className="artist">Artist</h1>
            <p className="album-title">Album Title</p>
            <p className="year">(year)</p>
          </div>
        </div>
        <div className="card-footer">
          <h4 className="rating-title">Rate this album</h4>
          <div className="rating">
            {stars.map((star, index) => {
              return (
                <span key={index} className="stars">
                  <AiFillStar
                    onClick={() => handleClick(index + 1)}
                    onMouseOver={() => handleMouseOver(index + 1)}
                    onMouseLeave={handleMouseLeave}
                    className={
                      (currVal || hoverVal) > index
                        ? "active-star"
                        : "inactive-star"
                    }
                    width="0.4rem"
                  />
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
