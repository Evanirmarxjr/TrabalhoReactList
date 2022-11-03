import styled from "styled-components";


export const AreaHeader = styled.div`
  height: 60px;
  background-color: #111;
  color: white;
`;

export const Container = styled.div`
  padding: 5px 20px;
  display: flex;
  align-items: center;

  .logo {
    flex: 1;
    margin-top: 4px;
    font-size: 0px;
  }

  nav {
    ul {
      display: contents;
    }

    li{
        list-style: none;
        margin-left: 60px;
        margin-top: 70px;
        a{
            text-decoration: none;
            color: black;

            &:hover{
                color: white;
            }
        }
    }
  }
`;
