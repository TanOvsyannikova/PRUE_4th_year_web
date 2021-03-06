// Button.js
import styled from 'styled-components';
const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 9rem;
  background: transparent;
  color: black;
  border: 2px solid white;
  :hover {
    border-color: green;
  }
`
export default Button;