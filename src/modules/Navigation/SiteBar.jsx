
import {Header, Link} from './SiteBar.styled';

const SiteBar = () => {
  return (
    <Header>
      <Link to={"/"}>Home</Link>
      <Link to={"/tweets"}>Tweets</Link>
    </Header>
  );
};

export default SiteBar;