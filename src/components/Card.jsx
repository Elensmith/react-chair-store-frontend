import React from "react";
import "./Card.css"

function Card(props) {
  return(
    <div className="card">
      <img 
        className="card__image" 
        src={props.card.img} 
        alt={props.card.name} />
      <h2 className="card__title" >{props.card.name}</h2>
      <p className="card__price">{props.card.price}<span className="card__price-symbol">₽</span></p>
      <button 
        className="card__button" 
        onClick={props.onClick} >Купить</button>
    </div>
  )
}

export default Card;