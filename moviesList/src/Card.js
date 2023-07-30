import React from "react";
import Heading from "./Heading";
import Images from "./Images";

function Card(props) {
    return (
      <div>
        <div className="cards">
          <div className="card">
            <Images imgSrc={props.imgSrc}/>
            <div className="card__info">
              <span className="card__category">{props.title}</span>
              <Heading name= {props.name} />
              <a href={props.link} target="_blank" rel="noreferrer">
                <button>Watch Now</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default Card;