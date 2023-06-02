import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
  padding-bottom: 50px;
  font-family: "Montserrat", sans-serif;
`;

export const FiltrContainer = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;

export const GoBackBtn = styled(Link)`
  background-color: #5736a3;
  padding: 10px;
  border-radius: 10px;
  color: #ebd8ff;
  width: 76px;
  height: 16px;

  font-size: 18px;
  text-decoration: none;
  text-align: center;

  &:hover {
    color: #5cd3a8;
  }
`;

export const Filtr = styled.label`
  font-size: 18px;

  background-color: #5736a3;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  min-width: 106px;
  height: 16px;

  &:hover {
    color: #5cd3a8;
  }

 `;

export const Select = styled.select`
position: relative;
  display: inline-block;
cursor: pointer;
margin-left:10px;
border: none;
`;


export const CardsList = styled.ul`
display: grid;
width: calc(100vw - 3 * 48px);
grid-template-columns: repeat(3, 380px);
grid-gap: 48px;
margin: 0 auto 0 auto;

justify-content: center;
padding: 0;
list-style: none;

`;


export const LoadMoreBtn = styled.button`
display: block;
width: 196px;
height: 50px;
margin: 20px auto;

background:  #5CD3A8;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;

font-family: inherit;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-transform: uppercase;
color: #373737;
`;