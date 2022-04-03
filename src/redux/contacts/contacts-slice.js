import { createSlice } from '@reduxjs/toolkit';
import { getItems, addItem, removeItem } from './contacts-operations';

const initialState = {
  data: { items: [], loading: false, error: null },
  filter: '',
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getItems.pending, state => {
        state.data.error = null;
        state.data.loading = true;
      })
      .addCase(getItems.fulfilled, (state, { payload }) => {
        state.data.items = payload;
        state.data.loading = false;
      })
      .addCase(getItems.rejected, (state, { payload }) => {
        state.data.error = payload;
        state.data.loading = false;
      })

      .addCase(addItem.pending, state => {
        state.data.error = null;
        state.data.loading = true;
      })
      .addCase(addItem.fulfilled, (state, { payload }) => {
        state.data.items = [payload, ...state.data.items];
        state.data.loading = false;
      })
      .addCase(addItem.rejected, (state, { payload }) => {
        state.data.error = payload;
        state.data.loading = false;
      })

      .addCase(removeItem.pending, state => {
        state.data.error = null;
        state.data.loading = true;
      })
      .addCase(removeItem.fulfilled, (state, { payload }) => {
        state.data.items = state.data.items.filter(({ id }) => id !== payload);
        state.data.loading = false;
      })
      .addCase(removeItem.rejected, (state, { payload }) => {
        state.data.error = payload;
        state.data.loading = false;
      });
  },
});

export const { changeFilter } = itemsSlice.actions;

export default itemsSlice.reducer;
