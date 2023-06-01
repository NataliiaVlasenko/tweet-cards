import { useEffect, useState } from "react";
import { getTweets } from "../../service/serviceApi";
import Tweets from "../../components/Cards/Cards";
import "./cards.css";
import { Link } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";

let numCards = 3;

const Cards = () => {
  const [dataTweets, setTweets] = useState([]);
  const [pageTweets, setPageTweets] = useState([]);
  const [filtr, setFiltr] = useState(true);

  const addMore = () => {
    if (pageTweets.length < dataTweets.length) {
      numCards += 3;
      setPageTweets(dataTweets.slice(0, numCards));
    }
    if (dataTweets.length <= pageTweets.length + 1) {
      setFiltr(false);
    }
  };

  useEffect(() => {
    getTweets().then((data) => setTweets(data));
  }, []);

  useEffect(() => {
    if (dataTweets.length > 0) {
      setPageTweets(dataTweets.slice(0, numCards));
    }
  }, [dataTweets]);

  const filter = (e) => {
    switch (e.target.value) {
      case "follow":
        setPageTweets(dataTweets.filter((tweets) => !tweets.following));
        setFiltr(false);
        break;
      case "followings":
        setPageTweets(dataTweets.filter((tweets) => tweets.following));
        setFiltr(false);
        break;
      case "all":
        setPageTweets(dataTweets);
        setFiltr(false);
        break;
      default:
        break;
    }
  };

  return dataTweets.length <= 0 ? (
    <div className="loader">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  ) : (
    <section className="section">
      <div className="section__btn--back">
        <Link to="/" className="goBack">
          Back
        </Link>
        <div>
          <label className="filtr">
            Fiter Cards
            <select id="folow" onChange={filter}>
              <option value="all">all</option>
              <option value="follow">follow</option>
              <option value="followings">followings</option>
            </select>
          </label>
        </div>
      </div>
      <ul className="cards">
        {pageTweets.length > 0 ? (
          pageTweets.map((tweets) => <Tweets props={tweets} key={tweets.id} />)
        ) : (
          <li></li>
        )}
      </ul>
      <div className="addMore">
        {
          <button onClick={addMore} className={filtr ? "addMoreBtn" : "none"}>
            Add More
          </button>
        }
      </div>
    </section>
  );
};

export default Cards;