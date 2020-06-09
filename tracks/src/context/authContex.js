import createDataContext from './createDataContext';
import trackApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackApi.post('/signup', { email, password });
      console.log(response.data);
    } catch (err) {
      console.log(err.response.data);
      dispatch({ type: 'add_error', payload: 'Something went Wrong' });
    }
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {};
};

const signout = (dispatch) => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signout, signin },
  { isSignedIn: false, errorMessage: '' },
);
