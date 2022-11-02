import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: blue;
  height: 100vh;
  color: white;
  align-items: center;

  #fotoPerfil {
    width: 200px;
    box-shadow: 0px 0px 17px 4px black;
    height: 200px;
    border-radius: 9999px;
    margin-top: 40px;
    margin-bottom: 15px;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 30px;

  span {
    padding: 0.5%;
    font-size: 50px;
    margin-right: -50px;
    margin-bottom: -20px;
    cursor: default;

    :hover {
      background-color: black;
      border-radius: 0px;
      opacity: 0.9;
    }
  }
  a {
    color: blue;
    font-size: 25px;
  }

  .sobreTexto {
    text-align: justify;
    margin: 60px;
    font-size: 25px;
    padding-top: 50px;
    padding-right: 300px;
    padding-left: 300px;
    padding-bottom: 100px;
    box-shadow: 0px 0px 17px 0px black;
    background-color: white;
    border-radius: 100px;
    color: black;
  }

  .marca {
    color: white;
  }

  #contatos{
    text-align: center;
    margin: 60px;
    padding-top: 50px;
    padding-bottom: 50px;
    box-shadow: 0px 0px 17px 0px #9a85d6;
    background-color: white;
    border-radius: 0px;
    color: black;
    
  }

  .skills{
    margin: 60px;
  }

  #imagemContato{
    height: 40px;
    }

  h1 {
    text-align: center;
    padding-top: 50px;
    /* padding-right: 300px;
        padding-left: 300px; */
    padding-bottom: 20px;
    box-shadow: 0px 0px 17px 0px #9a85d6;
    background-color: white;
    border-radius: 0px;
    color: black;
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    margin-bottom: 60px;
  }
`;
export const Footer = styled.div`
  height: 100px;
  background-color: 
`
