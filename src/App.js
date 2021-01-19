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
    name: null,
    email: null,
    phone: null,
    clickedItem: null
  });
  const [errors, setErrors] = React.useState({
    nameError: "",
    emailError: "",
    phoneError: "",
  });

  const nameRegex = RegExp(/[A-Za-zА-Яа-я]{2,20}/);
  const emailRegex = RegExp(/^([a-zA-Z0-9]+[-_.]*[a-zA-Z0-9]+|[a-zA-Z0-9]+)@[-a-zA-Z0-9]+[.][a-zA-Z.]{2,}$/);
  const phoneRegex = RegExp(/^[+]?[\d]([(][\d]{3}[)][\s]?[\d]{3}[-][\d]{2}[-][\d]{2}|[\d]{10}|[\s]([\d]{3}[-])+[\d]{2}[-][\d]{2})/);
  
  function formValid(errors) {
    let valid = false;

    Object.values(errors).forEach((val) => {
      if (val.length > 1 || val === "") {
        valid = false;
        return valid;
      } else if(val.length === 1) {
      valid = true;
      return valid;
      }
    });

    return valid;
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (formValid(errors)) {
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
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });


    switch (name) {
      case "name":
        nameRegex.test(value)
        ?  setErrors({...errors, nameError: "."})
        :  setErrors({...errors, nameError:"Введите имя от 2 до 20 символов"});
        break;
      case "phone":
        phoneRegex.test(value) 
      ?  setErrors({...errors, phoneError: "."})
      :  setErrors({...errors, phoneError:"Введите корректный номер телефона"});
        break;
      case "email":
        emailRegex.test(value) 
        ?  setErrors({...errors, emailError: "."})
        :  setErrors({...errors, emailError:"Введите корректный email"});
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
      nameError: "",
      emailError: "",
      phoneError: ""
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
