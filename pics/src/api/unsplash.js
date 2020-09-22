import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID J8UnVCQ8hYCZOv9WqOvQ2AFSFPUWVX7lWUl6XRDEX2Y",
  },
});
