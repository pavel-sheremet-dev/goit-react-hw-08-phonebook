import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from './index';
// const { signUp, signIn, signOut, getUser, refreshToken } = authOperations;
const { signUp, signIn, getUser, refreshToken } = authOperations;

const initialState = {
  user: { name: null, email: null },

  token: null,
  isLogIn: false,
  localId: null,
  refreshToken: null,

  loading: false,
  loadingUser: false,

  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signOut: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user.email = payload.email;
        state.user.name = payload.displayName;
        state.token = payload.idToken;
        state.isLogIn = true;
        state.localId = payload.localId;
        state.refreshToken = payload.refreshToken;
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
        state.user = payload.user;
        state.isLogIn = true;
        state.localId = payload.localId;
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
        state.user.email = payload.email;
        state.user.name = payload.displayName;
        state.token = payload.idToken;
        state.isLogIn = true;
        state.localId = payload.localId;
        state.refreshToken = payload.refreshToken;
      })
      .addCase(signIn.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.isLogIn = false;
      })
      // RefreshToken
      .addCase(refreshToken.pending, state => {
        state.loadingUser = true;
        state.error = null;
      })
      .addCase(refreshToken.fulfilled, (state, { payload }) => {
        state.loadingUser = false;
        state.token = payload.id_token;
        state.refreshToken = payload.refresh_token;
      })
      .addCase(refreshToken.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.token = null;
        state.refreshToken = null;
      });
  },
});

export default authSlice.reducer;

export const { signOut } = authSlice.actions;
