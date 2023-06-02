import messageImg from "../../img/messages.png";
import avatarDefault from "../../img/avatar.png";
import logo from "../../img/Logo.png";

import {
  CardItem,
  Logo,
  BackgrImg,
  Avatar,
  Tweets,
  ButtonContainer,
  Button,
} from "./Card.styled";

import { putTweets } from "../../service/serviceApi";
import { useState } from "react";

const Card = ({ props }) => {
  const [dataTweets, setTweets] = useState(props.followers);
  const [follow, setFolow] = useState(props.following);

  const following = (prop) => {
    if (follow) {
      setFolow(false);
      setTweets((prev) => prev - 1);
      putTweets(prop.id, { following: false, followers: props.followers - 1 });
      
    } else {
      setFolow(true);
      setTweets((prev) => prev + 1);
      putTweets(prop.id, { following: true, followers: props.followers + 1 });
    }
  };

  return (
    <CardItem>
      <Logo src={logo} alt="logo" />
      <BackgrImg>
        <img src={messageImg} alt="messageImg" />
      </BackgrImg>
      <Avatar>
        <img src={props.avatar || avatarDefault} alt="" width={62} />
      </Avatar>
      <Tweets>
        <div>{props.tweets} TWEETS</div>
        <div>
          {new Intl.NumberFormat("en-IN").format(dataTweets)} FOLLOWERS{" "}
        </div>
      </Tweets>
      <ButtonContainer>
       <Button data-active={follow} onClick={() => following(props)}>{follow ? "following" :"follow"}</Button>

      </ButtonContainer>
    </CardItem>
  );
};

export default Card;