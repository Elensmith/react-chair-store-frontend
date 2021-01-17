import React from 'react';
import close from "../images/close-white.svg";
import "./Popup.css";

function Popup(props) {
  return (
    <div className="popup">
      <div className="popup__content">
        <h3 className="popup__header">Оформление заказа</h3>
        <img 
          className="popup__close" 
          src={close} 
          alt="" 
          onClick={props.isClosed} />
        <form 
          className="popup__form" 
          >
          <p className="popup__label">Имя</p> 
          <input 
            className="popup__input" 
            value={props.value.name}
            name="name" 
            placeholder="Имя"
            onChange={(e) => props.onChange(e.target)}
            required>
            </input>
          <span className="popup__error">{props.error.nameError}</span>
          <p className="popup__label">Телефон</p>
          <input 
            className="popup__input"
            value={props.value.phone}
            name="phone" 
            placeholder="Телефон"
            onChange={(e) => props.onChange(e.target)}
            required>
            </input>
          <span className="popup__error">{props.error.phoneError}</span>
          <p className="popup__label">Email</p>
          <input 
            className="popup__input"
            value={props.value.email}
            name="email" 
            placeholder="Email"
            onChange={(e) => props.onChange(e.target)}
            required>
            {}</input>
          <span className="popup__error">{props.error.emailError}</span>
          <p className="popup__label">Название товара</p>
          <textarea 
            className="popup__item" 
            name="item" 
            rows="2" 
            placeholder="Название товара" 
            value={props.value.clickedItem}
            readOnly >
            </textarea>
          <button className="popup__button" type="submit"  onClick={props.onClick} >Заказать</button>
        </form>
      </div>
    </div>
  )
}

export default Popup;