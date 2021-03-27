import axios from 'axios';

const searchWorstLots = (query) => {
  const url = `/api/worst-parking-lots?location=${encodeURIComponent(query)}`;
  return axios.get(url).then(resp => resp.data);
}

export default {
  searchWorstLots
};
