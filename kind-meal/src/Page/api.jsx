import axios from "axios";

export const getaddress = (params = {}) => {
  return axios.get(`http://localhost:3000/address`, {
    params: {
      _page: params.page,
      _limit: params.limit,
      q:params.find}
    })
   
};
