import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signup':
      return { errorMessage: '', token: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackApi.post('/signup', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signup', payload: response.data.token });
      navigate('TrackList');
    } catch (err) {
      console.log(err.response.data);
      dispatch({ type: 'add_error', payload: 'Something went Wrong' });
    }
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackApi.post('/signin', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signup', payload: response.data.token });
      navigate('TrackList');
    } catch (err) {
      console.log(err);
      dispatch({ type: 'add_error', payload: 'Something went wrong' });
    }
  };
};

const signout = (dispatch) => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signout, signin },
  { token: null, errorMessage: '' },
);
