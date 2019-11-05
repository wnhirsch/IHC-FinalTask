import firebase from 'react-native-firebase';
import AUTH from './types';
// import { STORE } from '..';

export function saveResponse(type, payload) {
  return {
    type,
    payload,
  };
}

export const signUp = (email, password) => async (dispatch) => {
  await dispatch(saveResponse(AUTH.REQUEST));

  try {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async (response) => {
        await dispatch(saveResponse(AUTH.REQUEST_SUCCESS, response.data));
      }).catch(async (err) => {
        await dispatch(saveResponse(AUTH.REQUEST_FAIL, err));
      });
  } catch (error) {
    await dispatch(saveResponse(AUTH.REQUEST_FAIL, error));
  }
};

export const login = (email, password) => async (dispatch) => {
  await dispatch(saveResponse(AUTH.REQUEST));

  try {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(async (response) => {
        await dispatch(saveResponse(AUTH.REQUEST_SUCCESS, response.data));
      }).catch(async (err) => {
        await dispatch(saveResponse(AUTH.REQUEST_FAIL, err));
      });
  } catch (error) {
    await dispatch(saveResponse(AUTH.REQUEST_FAIL, error));
  }
};
