import styled from "styled-components";

export const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
`;

export const PageDiv = styled.div`
  background-color: #212121;
  font-family: "Montserrat", sans-serif;

  .backButton {
    position: absolute;
    top: 0;
    left: 0;
    padding: 1.1rem;
    margin-top: 1rem;
    margin-left: 1rem;
    padding: 0.75rem 1.25rem;
    background-color: rgba(0, 0, 0, 0.8);
    text-decoration: none;
    color: white;
    border-radius: 20px;
    font-weight: normal;
    transition: all 0.5s ease;
    border: white solid 1px;
    &:hover {
      background-color: rgba(0, 0, 0, 1);
      border-radius: 10px;
      font-weight: bold;
    }
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1`
  font-family: "Bangers", cursive;
  text-align: center;
  font-weight: bold;
  font-size: 5rem;
  letter-spacing: 0.2rem;
  color: rgb(253, 174, 35);
  padding: 2rem;
`;

export const GridCard = styled.div`
  border-radius: 5px;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3rem;

  transition: all 0.8s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);

    width: 100%;
  }

  &:hover {
  }

  h3 {
    opacity: 0.8;
    color: rgb(255, 255, 255);
    padding: 0.5rem;
  }
  h3:hover {
    opacity: 1;
  }
  p {
    padding: 0.5rem;
    opacity: 0.8;
    color: rgb(255, 255, 255);
  }
  p:hover {
    opacity: 1;
  }
`;
export const GridImg = styled.img`
  border-radius: 10%;
`;
