import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from './index';
const { signUp, signIn, signOut, getUser } = authOperations;

const initialState = {
  user: { name: null, email: null },

  token: null,
  isLogIn: false,

  loading: false,
  loadingUser: false,

  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user.email = payload.user.email;
        state.user.name = payload.user.name;
        state.token = payload.token;
        state.isLogIn = true;
      })
      .addCase(signUp.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.isLogIn = false;
      })
      // getUser
      .addCase(getUser.pending, state => {
        state.loadingUser = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.loadingUser = false;
        state.user = payload;
        state.isLogIn = true;
      })
      .addCase(getUser.rejected, (state, { payload }) => {
        state.loadingUser = false;
        state.error = payload;
        state.token = null;
        state.isLogIn = false;
      })
      // Sign In
      .addCase(signIn.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user.email = payload.user.email;
        state.user.name = payload.user.name;
        state.token = payload.token;
        state.isLogIn = true;
      })
      .addCase(signIn.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.isLogIn = false;
      })
      // Sign out
      .addCase(signOut.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signOut.fulfilled, state => {
        state.loading = false;
        state.user = initialState.user;
        state.token = null;
        state.isLogIn = false;
      })
      .addCase(signOut.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.isLogIn = false;
      });
  },
});

export default authSlice.reducer;
