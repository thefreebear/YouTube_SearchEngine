import axios from "axios";

const KEY = "AIzaSyB3NISGaQAJfwOAPjORc-VZN7caodns24M";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxresults: 5,
    key: KEY,
  },
});
