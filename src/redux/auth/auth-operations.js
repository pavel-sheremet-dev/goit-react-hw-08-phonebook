import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const SIGN_UP_ENDPOINT = '/users/signup';
const SIGN_IN_ENDPOINT = '/users/login';
const SIGN_OUT_ENDPOINT = '/users/logout';
const GET_USER_ENDPOINT = '/users/current';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const signUp = createAsyncThunk(
  'auth/signUp',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(SIGN_UP_ENDPOINT, credentials);
      token.set(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const signIn = createAsyncThunk(
  'auth/signIn',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(SIGN_IN_ENDPOINT, credentials);
      token.set(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const signOut = createAsyncThunk('auth/signOut', async (_, thunkAPI) => {
  try {
    await axios.post(SIGN_OUT_ENDPOINT);
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const getUser = createAsyncThunk('auth/getUser', async (_, thunkAPI) => {
  const savedToken = thunkAPI.getState().auth.token;

  if (!savedToken) {
    return thunkAPI.rejectWithValue();
  }

  token.set(savedToken);

  try {
    const res = await axios.get(GET_USER_ENDPOINT);
    return res.data;
  } catch (error) {
    token.unset();
    return thunkAPI.rejectWithValue(error.message);
  }
});

export { signUp, signIn, signOut, getUser };
