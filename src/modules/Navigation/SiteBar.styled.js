import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.div`
  padding: 10px;
  background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);

  display: flex;
  gap: 15px;
  color: #EBD8FF;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
`;

export const Link = styled(NavLink)`
  color: #EBD8FF;
  text-decoration: none;
  &: hover {
    color: #5CD3A8;
  }
`;

// input {
//     width: 200px;
//     background-color: #fff;
// }
