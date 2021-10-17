import styled from 'styled-components';
   
export const Box = styled.div`
  padding-bottom:6px;
  background: black;
  position: absolute;
  bottom: 0;
  width: 100%;
  
   
 
`;

export const FooterLink = styled.a`
  color: #fff;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: red;
      transition: 200ms ease-in;
  }
`;