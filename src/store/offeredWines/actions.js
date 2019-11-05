import axios from 'axios';
import OFFERED_WINES from './types';

import { DEBUG } from '../../environment';

export function saveResponse(type, payload) {
  return {
    type,
    payload,
  };
}

export const getOfferedWines = (page) => async (dispatch) => {
  await dispatch(saveResponse(OFFERED_WINES.REQUEST));

  return axios({
    method: 'GET',
    url: `${DEBUG.SERVER_URL}/offeredwines?page=${page}`,
  }).then(async (response) => {
    await dispatch(saveResponse(OFFERED_WINES.REQUEST_SUCCESS, response.data));
    return response.data;
  }).catch(async (err) => {
    await dispatch(saveResponse(OFFERED_WINES.REQUEST_FAIL, err));
  });
};
