import axios from 'axios';

export const getCoronaData = () => 
  axios.get('http://ec2-15-164-165-70.ap-northeast-2.compute.amazonaws.com/naeulcheck');