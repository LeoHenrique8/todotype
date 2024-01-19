import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column  ;

    form{
      display: flex;
      input {
      font-size: 16px;
      width: 60vh;
      margin: 20px 0;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 4px;
      outline: none;
      transition: border-color 0.3s ease-in-out;
      }

      /* Estilização quando o campo de input está em foco */
      input:focus {
        border-color: #007bff;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
      }

      button{
        font-weight: 1000;
        height: 60px;
        width: 60px;
        border: none;
        font-size: 30px;
        color: white;
        border-radius: 3px;
        margin: 0 10px;
        background-color: #ff0000aa;
        margin: 20px 10px;
        cursor: pointer;

        &:hover{
          background-color: #990000;
        }
      }

    }

`;
