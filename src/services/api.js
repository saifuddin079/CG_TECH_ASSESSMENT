import axios from "axios";
import { base_url } from "./endpoint.js";

export default {
  get: async opts => {
    try {
      let response = await axios.get(base_url + opts.path);
      return response.data;
    } catch (e) {
      console.log(e, "error..!!!!");
      return { error: e };
    }
  }
};
