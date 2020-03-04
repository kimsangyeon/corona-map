import React from 'react';

const Corona = ({onGetCoronaData, data}) => {
  return (
    <>
      {
        data && 
        <div>
          <h1>업데이트 시간: {data['time']}</h1>
          <div>확진환자: {data['확진환자']}</div>
          <div>확진환자 격리해제: {data['확진환자 격리해제']}</div>
          <div>사망자: {data['사망자']}</div>
          <div>검사진행: {data['검사진행']}</div>
        </div>
      }
      <button onClick={onGetCoronaData}>get corona data</button>
    </>
  );
};

export default Corona;