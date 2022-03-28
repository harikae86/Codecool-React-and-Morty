import styled from "styled-components";

export const Wrapper = styled.nav`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  color: #5e6776;
  margin: 2rem auto;
  width: 80%;
`;

export const ListItem = styled.li`
  background-color: #fff;
  width: 20%;
  text-align: center;
  border-radius: 50%;
  margin: 0 0.5rem;
  padding: 0.3rem 0.5rem;
  list-style-type: none;
  cursor: pointer;
  border: black solid 2px;
  color: black;
  font-weight: bold;

  &:hover {
    background-color: rgba(200, 25, 19, 0.5);
  }
  .active {
    background-color: rgba(200, 25, 19, 0.8);
  }
`;
