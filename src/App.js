import React from "react";
import './App.css';
import Card from "./components/Card";
import Popup from "./components/Popup"
import emailjs from "emailjs-com";


function App() {
  const cardsJSON = require("./utils/cards.json");
  const [cards, setCards] = React.useState([]);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    phone: "",
    clickedItem: ""
  });
  const [errors, setErrors] = React.useState({
    nameError: null,
    emailError: null,
    phoneError: null
  });

  const nameRegex = RegExp(/[A-Za-zА-Яа-я]{2,20}/);
  const emailRegex = RegExp(/^([a-zA-Z0-9]+[-_.]*[a-zA-Z0-9]+|[a-zA-Z0-9]+)@[-a-zA-Z0-9]+[.][a-zA-Z.]{2,}$/);
  const phoneRegex = RegExp(/^[+]?[\d]([(][\d]{3}[)][\s]?[\d]{3}[-][\d]{2}[-][\d]{2}|[\d]{10}|[\s]([\d]{3}[-])+[\d]{2}[-][\d]{2})/);
  
  function handleSubmit(e) {
    e.preventDefault();

    let empty = false;

    if (values.name === undefined) {
      setErrors({nameError:"Заполните это поле"});
      empty = true;
      return empty;
    } 
    if (values.email === undefined) {
      setErrors({emailError:"Заполните это поле"});
      empty = true;
      return empty;
    }
    if (values.phone === undefined) {
      setErrors({phoneError:"Заполните это поле"});
      empty = true;
      return empty;
    }

    if ((errors.nameError === undefined || errors.nameError === null) && (errors.emailError === undefined || errors.emailError === null) && (errors.phoneError === undefined || errors.phoneError === null) && !empty) {

      const templateParams = {name: values.name, email: values.email, phone: values.phone, item: values.clickedItem}

      // вариант для гитхаб
      alert("Эти данныe уйдут на почту: Имя: " + templateParams.name + " Email: " + templateParams.email + " Телефон: " + templateParams.phone + " Название товара: " + templateParams.item);

      // отправка данных на почту
      // emailjs.send('gmail', 'template_id', templateParams, 'user_id')
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
      setIsPopupOpen(false);
    }
  }

  function handleInputChange(e) {
    const { name, value } = e;
    setValues({
      ...values,
      [name]: value
    });


    switch (name) {
      case "name":
        nameRegex.test(value) && value.length > 0 
        ?  setErrors({nameError:null})
        :  setErrors({nameError:"Введите имя от 2 до 20 символов"});
        break;
      case "email":
        emailRegex.test(value) && value.length > 0 
        ?  setErrors({emailError:null})
        :  setErrors({emailError:"Введите корректный email"});
        break;
      case "phone":
        phoneRegex.test(value) && value.length > 0 
      ?  setErrors({phoneError:null})
      :  setErrors({phoneError:"Введите номер телефона"});
        break;
      default:
        break;
    }
  }

  function handlerCardButtonClick(e) {
    setValues({clickedItem: e.target.parentNode.childNodes[1].innerText})
    setIsPopupOpen(true);
  }

  function closePopup() {
    setIsPopupOpen(false);
    setErrors({
      nameError: null,
      emailError: null,
      phoneError: null
    });
  }

  React.useEffect(() => {
    setCards(cardsJSON.product);
  }, [cardsJSON.product]);

  return (
    <div className="app">
      <h1 className="app__header">Welcome to CHAIR STORE</h1>
      <div className="app__grid">
        {cards.map((card) =>
          <Card
            key={card.id}
            card={card}
            onClick={handlerCardButtonClick}
          />)}
        </div>
      {isPopupOpen 
        ? <Popup 
        onClick={handleSubmit}
        value={values}
        error={errors}
        isClosed={closePopup}
        onChange={handleInputChange}
        /> 
        : ""}
    </div>
  );
}

export default App;
