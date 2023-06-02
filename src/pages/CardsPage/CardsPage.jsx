import { useEffect, useState } from "react";
import { getTweets } from "../../service/serviceApi";
import Card from "../../components/Cards/Card";

import { FaAngleLeft } from "react-icons/fa";

import Loader from "../../components/Loader";
import {
  Section,
  FiltrContainer,
  GoBackBtn,
  Filtr,
  Select,
  CardsList,
  LoadMoreBtn,
} from "./CardsPage.styled";

let cardsCount = 3;

const CardsPage = () => {
  const [dataTweets, setTweets] = useState([]);
  const [pageTweets, setPageTweets] = useState([]);
  const [onFilter, setFiltr] = useState(true);

  const loadMore = () => {
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
    <Loader />
  ) : (
    <Section>
      <FiltrContainer>
        <GoBackBtn to="/">
          <FaAngleLeft />
        </GoBackBtn>

        <Filtr>
          Filter cards
          <Select id="follow" onChange={filter}>
            <option value="all">show all</option>
            <option value="follow">follow</option>
            <option value="followings">followings</option>
          </Select>
        </Filtr>
      </FiltrContainer>

      <CardsList>
        {pageTweets.map((tweets) => (
          <Card props={tweets} key={tweets.id} />
        ))}
      </CardsList>

      {onFilter && <LoadMoreBtn onClick={loadMore}>Load more</LoadMoreBtn>}
    </Section>
  );
};

export default CardsPage;
