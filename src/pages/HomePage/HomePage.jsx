import welcome from "../../assets/img/messages.png";
import {HomeContainer, WelcomeTitle} from './HomePage.styled';

const HomePage = () => {
  return (
    <HomeContainer>
        <img src={welcome} alt="welcomLogo" />
      <WelcomeTitle>Let`s Tweet!</WelcomeTitle>
      
    </HomeContainer>
  );
};

export default HomePage;