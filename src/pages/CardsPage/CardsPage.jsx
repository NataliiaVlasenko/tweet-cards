import { useEffect, useState } from "react";
import { getTweets } from "../../service/serviceApi";
import Tweets from "../../components/Cards/Cards";
import "./cards.css";
import { Link } from "react-router-dom";
import Loader from '../../components/Loader';

let cardsCount = 3;

const CardsPage = () => {

  const [dataTweets, setTweets] = useState([]);
  const [pageTweets, setPageTweets] = useState([]);
  const [filtr, setFiltr] = useState(true);

  const addMore = () => {
    if (pageTweets.length < dataTweets.length) {
      cardsCount += 3;
      setPageTweets(dataTweets.slice(0, cardsCount));
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
      setPageTweets(dataTweets.slice(0, cardsCount));
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
    <Loader/>
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

export default CardsPage;