import { useState } from "react";
let Tour = (props) => {
  let [showText, setShowText] = useState(false);
  function showTextFunc() {
    setShowText(!showText);
  }

  return (
    <div className="tourDiv" key={props.id}>
      <img src={props.image} alt="tour-images" />
      <p className="price">$ {props.price} </p>
      <h3>{props.name}</h3>
      {showText ? (
        <p className="info">
          {props.info}
          <button className="showText" onClick={showTextFunc}>
            ...show less
          </button>
        </p>
      ) : (
        <p className="info">
          {props.info.slice(0, 210)}
          <button className="showText" onClick={showTextFunc}>
            ...show more
          </button>
        </p>
      )}
      <article>
        <button
          className="notInterested"
          id={props.id}
          onClick={props.delHandler}
        >
          Not Interested
        </button>
      </article>
    </div>
  );
};
export default Tour;
