import styled from "styled-components";

interface Props {
   hslHue: number;
   locked: boolean;
}
export const ContainerCard = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;

   p {
      display: flex;
      justify-content: space-between;
      background-color: #fcfcfc;
      padding: 1rem 1.5rem;
      border-radius: 3px;
      cursor: pointer;
      border: 2px solid #fcfcfc;

      &:hover {
         border: 2px solid #ccc;
      }

      &:active {
         background-color: #eee;
      }
   }
`;
export const CardPalette = styled.div<Props>`
   background-color: hsl(${({ hslHue }) => (hslHue ? hslHue : 0)}, 100%, 50%);
   font-size: 2rem;
   padding: 1rem;
   margin-bottom: 0.7rem;
   border-radius: 3px;
   cursor: pointer;
   display: flex;
   flex: 1;
   align-items: center;
   justify-content: center;

   &:hover img {
      opacity: 1;
      transition: ease 0.1s;
   }
   img {
      width: 17px;
      mix-blend-mode: difference;
      opacity: ${({ locked }) => (locked ? 1 : 0.6)};
      transform: scale(${({ locked }) => (locked ? 1.2 : 1)});
   }
`;
