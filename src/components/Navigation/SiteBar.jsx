import { NavLink } from "react-router-dom";
import {Header} from './SiteBar.styled';

const SiteBar = () => {
  return (
    <Header>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/tweets"}>Tweets</NavLink>
    </Header>
  );
};

export default SiteBar;