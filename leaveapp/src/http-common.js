import axios from "axios";

export default axios.create({
  baseURL: "https://leave-application-react.deta.dev/api",
  headers: {
    "Content-type": "application/json"
  }
});