import "./tweets.css";
import messageImg from "../../img/messages.png";
import avatar from "../../img/avatar.png";
import logo from "../../img/Logo.png";
import { putTweets } from "../../service/serviceApi";
import { useState } from "react";

const Card = ({ props }) => {
  const [dataTweets, setTweets] = useState(props.followers);
  const [folow, setFolow] = useState(props.following);

  const following = (prop) => {
    if (folow) {
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
    <li className="card">
      <div className="card__Avatar">
        <img className="goit__Span" src={logo} alt="logo" />
        <div className="card__messageImg">
          <img src={messageImg} alt="" />
        </div>
        <div className="avatar">
          <img src={props.avatar || avatar} alt="" width={62} />
        </div>
      </div>
      <div className="card__Tweets">
        <p>
          <span>{props.tweets}</span> TWEETS
        </p>
        <p>
          <span>{new Intl.NumberFormat("en-IN").format(dataTweets)} </span>
          FOLLOWERS
        </p>
      </div>
      <div className="card__btn">
        {folow ? (
          <button
            className={"btn is-active btn"}
            onClick={() => following(props)}
          >
            FOLLOWING
          </button>
        ) : (
          <button className={"btn"} onClick={() => following(props)}>
            FOLLOW
          </button>
        )}
      </div>
    </li>
  );
};

export default Card;