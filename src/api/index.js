import axios from "axios"

export default axios.create({
  baseURL: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/",
});