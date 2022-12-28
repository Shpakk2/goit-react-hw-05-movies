import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 100%;
  margin: 0;
`;

export const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  box-shadow: 0 0 10px black;
  > nav {
    display: flex;
    gap: 20px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 600;
  font-size: 26px;
  line-height: 1.18;
  &.active {
    color: red;
  }
`;