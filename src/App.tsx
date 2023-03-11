import React, { useEffect } from "react";
import "./styles/styles.css";
import Card from "./components/Card";
import { CardType } from "./types/CardsType";
import hslToHex from "hsl-to-hex";

import opened from "./assets/opened.svg";
import locked from "./assets/locked.svg";

function App() {
   const [cards, setCards] = React.useState<CardType[]>([]);

   useEffect(() => {
      let newCards: CardType[] = [];
      for (let i = 0; i < 4; i++) {
         let hue = Math.random() * 360;
         newCards.push({
            hue: hue,
            blocked: false,
            icon: opened,
            hex: hslToHex(hue, 100, 50),
         });
      }
      setCards(newCards);
   }, []);

   function cloneCards(cards: CardType[]) {
      let cloneCards = [...cards];
      cloneCards.forEach((card) => {
         if (card.blocked === false) {
            let newHue = Math.random() * 360;
            card.hue = newHue;
            card.hex = hslToHex(newHue, 100, 50);
         }
      });

      setCards(cloneCards);
   }

   function generateColor(
      e: KeyboardEvent | React.MouseEvent<HTMLButtonElement>
   ) {
      if (cards && e instanceof KeyboardEvent && e.key === " ") {
         cloneCards(cards);
      } else {
         cloneCards(cards);
      }
   }

   document.body.onkeyup = generateColor;

   function handleClick(index: number) {
      let cloneCards = [...cards];
      if (cloneCards[index].blocked === false) {
         cloneCards[index].blocked = true;
         cloneCards[index].icon = locked;
      } else {
         cloneCards[index].blocked = false;
         cloneCards[index].icon = opened;
      }
      setCards(cloneCards);
   }

   return (
      <>
         <header>
            <h2>
               Pressione a <strong>barra de espaço</strong> do teclado para
               gerar cores, ou{" "}
               <button onClick={(e) => generateColor(e)}>Clique Aqui</button>
            </h2>
         </header>

         <div className="container">
            <div className="colorPaletteContainer">
               {cards.map((card, index) => (
                  <Card
                     key={index}
                     value={card}
                     onClick={() => handleClick(index)}
                  />
               ))}
            </div>
         </div>
      </>
   );
}
export default App;
