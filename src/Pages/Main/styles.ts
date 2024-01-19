import styled from "styled-components";



export const Container = styled.div`
margin: 0;
min-width: 100%;
min-height: 100vh;
color: white;
display: flex;


  .formDiv{
    width: 50%;
    margin: 0;
    display: flex;
    height: 100vh;
    flex-direction:column;
    align-items: center;
    background-color: #333333;
    justify-content: center;
    border: 3px solid black;

    h1{
    font-weight: 700;
    text-align: center;
    }


  }

  .showDiv{
    width: 50%;
    display: flex;
    height: 100vh;
    flex-direction:column;
    align-items: center;
    background-color: #ff0000aa;
    justify-content:center;
    color:black;

    img{
      width: 30vh;
    }
  }


`;
