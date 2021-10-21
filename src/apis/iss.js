import axios from 'axios';

export default axios.create({
  baseURL: 'http://api.open-notify.org/iss-now.json',
});
