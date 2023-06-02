import styled from "styled-components";

export const CardItem = styled.li`
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  width: 380px;
  position: relative;
  font-family: "Montserrat", sans-serif;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const BackgrImg = styled.div`
  padding: 28px 36px 18px 36px;
`;

export const Avatar = styled.div`
  display: block;
  content: " ";
  height: 7px;
  width: 380px;
  position: relative;

  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  background-color: #ebd8ff;

  & > img {
    position: absolute;
    bottom: -27px;
    left: 159px;
    z-index: 100;

    border-radius: 100%;
  }

  &::after {
    width: 80px;
    height: 80px;
    content: " ";
    display: block;

    background: #ebd8ff;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
      inset 0px -2.19582px 4.39163px #ae7be3,
      inset 0px 4.39163px 3.29372px #fbf8ff;
    border-radius: 100%;

    position: absolute;
    left: 150px;
    bottom: -36px;
  }
`;

export const Tweets = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  margin-top: 62px;
  margin-bottom: 26px;

  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 36px;
`;

export const Button = styled.button`
  width: 196px;
  height: 50px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-family: inherit;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;

  &[data-active="true"] {
    background-color: #5cd3a8;
  }
  }
`;
