import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  padding-top: 20px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const FilmLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: white;
    background-color: red;
  }
`;

export const Item = styled.li`
  text-decoration: none;
  color: black;
  font-weight: 500;
`;

export const Img = styled.img`
  margin-right: 20px;
`;

export const Text = styled.p`
  margin-top: auto;
  margin-bottom: auto;
  color: inherit;
  &:hover {
    color: red;
  }
`;