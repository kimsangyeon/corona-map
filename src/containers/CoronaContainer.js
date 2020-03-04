import React from 'react';
import { connect } from 'react-redux';
import { getCoronaData } from '../modules/corona';
import Corona from '../component/Corona';

const CoronaContainer = ({data={}, getCoronaData}) => {
  return (
    <Corona data={data} onGetCoronaData={getCoronaData} />
  )
};

export default connect(
  state => ({
    ...state.corona
  }),
  {
    getCoronaData
  }
)(CoronaContainer);