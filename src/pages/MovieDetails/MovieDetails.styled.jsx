import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
`;

export const Position = styled.div`
  display: flex;
`;

export const LinkBack = styled(Link)`
  margin-bottom: 14px;
  display: inline-block;
  padding: 8px 10px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  background-color: gray;
  &:hover {
    color: white;
    background-color: red;
  }
`;
export const NavigationLink = styled(NavLink)`
  display: inline-block;
  padding: 8px 10px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  background-color: gray;
  &.active {
    background-color: red;
  }
`;

export const List = styled.ul`
display: flex;
gap: 15px;
margin-bottom: 10px;
`;

export const Item = styled.li`
  text-decoration: none;
  color: black;
  font-weight: 500;
`;

export const Img = styled.img`
  margin-right: 50px;
`;
