import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

     body {
        margin: 0;
        padding: 0;
        box-sizing: 'border-box',;
        background: #F4F6F6
     }


     button {
         border: none;
         background: #FFFFFF;

         &:hover {
            cursor: pointer;
          }
      }

`;
