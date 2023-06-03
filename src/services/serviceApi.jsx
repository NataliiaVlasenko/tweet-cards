import axios from "axios";
import { toast } from "react-toastify";

const API = "https://63f9ba5dbeec322c57e6d42a.mockapi.io";

async function getTweets() {
  try {
    const { data } = await axios.get(`${API}/users`);
    return data;
  } catch (error) {
    if (error.response.status === 404) {
      toast.info("There is no such user's collection!");
    } else if (error.response.status === 500) {
      toast.error("Oops! Server error! Please try later!");
    } else {
      toast.error("Something went wrong! Please reload the page!");
    }
  }
}

async function putTweets(id, tweets) {
  try {
    const { data } = await axios.put(`${API}/users/${id}`, tweets);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

async function getFollowingTweets(following) {
   
  try {
    const { data } = await axios.get(`${API}/users/?following=${following}`);
    return data.filter(user => user.following!=null);
  } catch (error) {
    console.log(error.message);
  }
}

export { getTweets, putTweets, getFollowingTweets };
