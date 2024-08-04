import style from "./creditcard.module.scss";
import { useState } from "react";

const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");

  const handleConfirm = (e) => {
    e.preventDefault();

    localStorage.setItem("cardNumber", cardNumber);
    localStorage.setItem("name", name);
    localStorage.setItem("expiryDate", expiryDate);
    localStorage.setItem("cvc", cvc);
  };

  const handleChange = (e) => {
    let newValue = e.target.value;
    if (newValue.length > 16) {
      setValue(newValue.slice(0, 16));
    } else {
      setValue(newValue);
    }
  };

  const handleChangeInput= (e) => {
    let newValue = e.target.value;
    if (newValue.length > 3) {
      setValue(newValue.slice(0, 3));
    } else {
      setValue(newValue);
    }
  };

  return (
    <form className={style.container} onSubmit={handleConfirm}>
      <label className={style.text}>card number</label>
      <input
        className={style.input}
        type="number"
        maxLength="16"
        placeholder="0000 0000 0000 0000 "
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value) > { handleChange }}
      />

      <label className={style.text}>cardholder name</label>

      <input
        className={style.input}
        type="text"
        placeholder="John Doe"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className={style.cardDetail}>
        <div className={style.expDateBox}>
          <label className={style.text}>exp. date</label>
          <div className={style.infoExpireDate}>
            <input
              className={style.input}
              type="number"
              placeholder="MM"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
            <input
              className={style.input}
              type="text"
              placeholder="YY"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </div>
        </div>
        <div className={style.cvcBox}>
          <label className={style.text}>cvc</label>
          <input
            className={style.input}
            type="number"
            maxLength="3"
            placeholder="CVC"
            value={cvc}
            onChange={(e) => setCvc(e.target.value) > { handleChangeInput }}
          />
        </div>
      </div>
      <button onClick={handleConfirm} type="submit" className={style.btn}>
        Confirm
      </button>
    </form>
  );
};
export default CreditCardForm;
