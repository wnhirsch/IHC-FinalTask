import axios from 'axios';
import WISHED_WINES from './types';
import { DEBUG } from '../../environment';
// import { STORE } from '..';

export function saveResponse(type, payload) {
  return {
    type,
    payload,
  };
}

export const getWishedWines = (page) => async (dispatch) => {
  await dispatch(saveResponse(WISHED_WINES.REQUEST));
  return axios({
    method: 'GET',
    url: `${DEBUG.SERVER_URL}/wishedwines?page=${page}`,
  }).then(async (response) => {
    await dispatch(saveResponse(WISHED_WINES.REQUEST_SUCCESS, response.data));
    return response.data;
  }).catch(async (err) => {
    await dispatch(saveResponse(WISHED_WINES.REQUEST_FAIL, err));
  });
};
