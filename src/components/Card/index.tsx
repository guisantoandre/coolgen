import React from "react";
import { CardType } from "../../types/CardsType";
import * as C from "./styles";
import copyIcon from "../../assets/copy.svg";

interface Props {
   value: CardType;
   onClick: () => void;
}
const Card = ({ value, onClick }: Props) => {
   return (
      <>
         <C.ContainerCard>
            <C.CardPalette
               hslHue={value.hue}
               onClick={onClick}
               locked={value.blocked}
            >
               <img src={value.icon} alt="Blocked Icon" />
            </C.CardPalette>
            <p onClick={() => navigator.clipboard.writeText(value.hex)}>
               {value.hex.toLocaleUpperCase()}
               <img src={copyIcon} alt="" className="copyClipBoard" />
            </p>
         </C.ContainerCard>
      </>
   );
};

export default Card;
