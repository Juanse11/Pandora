import axios from 'axios'

const instance = axios.create({
  baseURL: `https://pandora-serverapi.herokuapp.com/api/v1`
});



export default instance