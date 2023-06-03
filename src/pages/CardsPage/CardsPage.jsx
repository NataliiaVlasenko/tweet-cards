import { useEffect, useState } from "react";
import { getTweets, getFollowingTweets } from "../../services/serviceApi";
import Card from "../../modules/Cards/Card";
import { FaAngleLeft } from "react-icons/fa";

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
  const [filtrValue, setFiltrValue] = useState("all");

  useEffect(() => {
    const filter = (filtrValue) => {
      switch (filtrValue) {

        case "follow":
          getFollowingTweets(false).then((data) => setTweets(data));
          break;

        case "followings":
          getFollowingTweets(true).then(
            (data) => setTweets(data)
            
            );
         break;

        case "all":
          getTweets().then((data) => setTweets(data));
          break;
        default:
          break;
      }
    };
    
    filter(filtrValue);
  }, [filtrValue]);

  useEffect(() => {
    setPageTweets(dataTweets);
    if (dataTweets.length > 0) {
      setPageTweets(dataTweets.slice(0, cardsCount));
    }
  }, [dataTweets]);

  const loadMore = () => {
    if (pageTweets.length < dataTweets.length) {
      cardsCount += 3;
      setPageTweets(dataTweets.slice(0, cardsCount));
    }
  };

  const setFilter = (e) => {
    setFiltrValue(e.target.value.toString());
  };

  return (
    <Section>
      <FiltrContainer>
        <GoBackBtn to="/">
          <FaAngleLeft />
        </GoBackBtn>

        <Filtr>
          Filter cards
          <Select id="follow" onChange={setFilter}>
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

      {cardsCount === pageTweets.length && (
        <LoadMoreBtn onClick={loadMore}>Load more</LoadMoreBtn>
      )}
    </Section>
  );
};

export default CardsPage;
