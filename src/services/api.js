import axios from "axios";

export default {
  async httpGet(opts) {
    try {
      const options = {
        method: "GET",
        url: opts.url,
        headers: {
          "Content-Type": "application/json"
        },
       //  params: { page: 1 }
      };
      let response = await axios(options);
      if (response && response.data) {
        return response.data;
      } else {
        return null;
      }
    } catch (e) {
      console.log(e)
    }
  }
};

