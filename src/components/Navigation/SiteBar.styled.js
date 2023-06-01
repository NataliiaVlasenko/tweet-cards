import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.div`
  padding: 10px 10px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  display: flex;
  gap: 15px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
`;

export const Link = styled(NavLink)`
  color: white;
  &: hover {
    color: #5cd3a8;
  }
`;

// input {
//     width: 200px;
//     background-color: #fff;
// }
