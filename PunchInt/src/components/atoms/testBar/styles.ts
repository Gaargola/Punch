import { NavLink as ReactRouterLink }  from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(ReactRouterLink)`
  color:  white;
  text-decoration: none;
  margin: 0 10px 0;
  font-size: 18px;
  &:hover{
    color:red;
  };
`;

export const Ulstyles = styled.ul`
  margin-top: 1rem;
  list-Style: none;
  display:flex;
`;

export const LiStyles = styled.li`
  margin: 10px;
  height: 30px;
`;


