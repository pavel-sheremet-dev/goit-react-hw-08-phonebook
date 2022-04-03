import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = process.env.REACT_APP_FIREBASE_URL;

const API_KEY = process.env.REACT_APP_FIREBASE_KEY;

const SIGN_UP_URL = BASE_URL + ':signUp?key=' + API_KEY;

const SIGN_IN_URL = BASE_URL + ':signInWithPassword?key=' + API_KEY;

const GET_USER_URL = BASE_URL + ':lookup?key=' + API_KEY;

const GET_REFRESH_TOKEN_URL =
  'https://securetoken.googleapis.com/v1/token?key=' + API_KEY;

// const token = {
//   set: token => {
//     axios.defaults.headers.common.Autorization = `Bearer ${token}`;
//   },
//   unset: () => {
//     axios.defaults.headers.common.Autorization = '';
//   },
// };

const signUp = createAsyncThunk(
  'auth/signUp',
  async (credentials, thunkAPI) => {
    const data = { ...credentials, returnSecureToken: true };
    try {
      const res = await axios.post(SIGN_UP_URL, data);
      // token.set(res.data.idToken);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error.message);
    }
  },
);

const signIn = createAsyncThunk(
  'auth/signIn',
  async (credentials, thunkAPI) => {
    const data = { ...credentials, returnSecureToken: true };
    try {
      const res = await axios.post(SIGN_IN_URL, data);
      // token.set(res.data.idToken);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error.message);
    }
  },
);

// const signOut = createAsyncThunk('auth/signOut', async () => {
//   token.unset();
// });

const getUser = createAsyncThunk('auth/getUser', async (token, thunkAPI) => {
  const savedToken = token ?? thunkAPI.getState().auth.token;

  if (!savedToken) {
    return thunkAPI.rejectWithValue();
  }

  // token.set(savedToken);

  try {
    const res = await axios.post(GET_USER_URL, {
      idToken: savedToken,
    });
    // token.set(savedToken);
    const payload = {
      user: {
        name: res.data.users[0].displayName,
        email: res.data.users[0].email,
      },
      localId: res.data.users[0].localId,
    };
    return payload;
  } catch (error) {
    const errorMessage = error.response.data.error.message;
    // token.unset();
    if (errorMessage === 'INVALID_ID_TOKEN') {
      thunkAPI.dispatch(refreshToken());
    }
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

const refreshToken = createAsyncThunk(
  'auth/refreshToken',
  async (_, thunkAPI) => {
    const savedRefreshToken = thunkAPI.getState().auth.refreshToken;

    if (!savedRefreshToken) {
      return thunkAPI.rejectWithValue();
    }

    const body = {
      grant_type: 'refresh_token',
      refresh_token: savedRefreshToken,
    };
    try {
      const data = await axios.post(GET_REFRESH_TOKEN_URL, body);
      thunkAPI.dispatch(getUser());
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error.message);
    }
  },
);

// export { signUp, signIn, signOut, getUser, refreshToken };
export { signUp, signIn, getUser, refreshToken };
