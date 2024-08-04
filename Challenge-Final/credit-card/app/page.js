"use client";

import CardFront from "./components/CardFront/CardFront";
import CardRetro from "./components/CardRetro/CardRetro";
import CreditCardForm from "./components/CreditCard.jsx/CreditCard";
import style from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [cardDetails] = useState({
    cardNumber: "",
    name: "",
    expiryDate: "",
    cvc: "",
  });

  return (
    <main className={style.main}>
      <div className={style.card}>
        <CardFront
          cardNumber={cardDetails.cardNumber}
          name={cardDetails.name}
          expiryDate={cardDetails.expiryDate}
        />
        <CardRetro cvc={cardDetails.cvc} />
      </div>
        <CreditCardForm />
  
    </main>
  );
}
