import styled from "styled-components";



export const Container = styled.div`
display: flex;


p{
  font-weight: 500;
  font-size: 30px;
  font-style: italic;
  background-color:#cccccc;
  margin: 1vh;
  display: flex;
  height: 50px;
  width: 70vh;
  border-radius: 3px;
  padding: 10px 40px;
  align-items: center;
  cursor: pointer;
  font-family: 'Source Code Pro', monospace;
  box-shadow: 5px 5px 10px #888888;
  &:hover{
  background-color:  darkgray;
  transition: 0.3s;
  }

}


.checked{
  background-color: darkgray;
  text-decoration: line-through;

}

div{
    background: none;
    border: none;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;


          svg{
            fill: white;
            font-size: 55px;
            cursor: pointer;

          }

    &:hover{
      transform: scale(1.4);
      transition: 0.3s;
    }
}


`;
