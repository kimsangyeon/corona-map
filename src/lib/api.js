import axios from 'axios';

const APIKey = '6cffa5b3ca2be0f75f43a4d2e3ebfb269228746713e730232d5482d91e8187f4';

export const getCoronaData = () =>
  axios.get('https://api.dropper.tech/covid19/status/korea/synthesize', {
    headers: {
      APIKey,
    },
  });

// 3월 14일 부로 코로나 확진자수 공공데이터 제공이 중단됨..
//'http://ec2-15-164-165-70.ap-northeast-2.compute.amazonaws.com/naeulcheck'
