import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  padding: 16px;
  background-color: #88008F;
  box-shadow: 0px 3px 8px 2px rgba(0, 0, 0, 0.2);
`;

export const LinkStyled = styled(NavLink)`
  font-size: 16px;
  font-weight: 500;
  margin-right: 20px;
  text-decoration: none;
  color: black;
  &.active {
    color: #FFFFFF;
  }
`;
