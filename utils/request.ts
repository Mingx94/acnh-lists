import Axios from 'axios';

const axios = Axios.create({ baseURL: 'https://acnhapi.com/v1a/' });

export default axios;
