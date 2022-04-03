import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getContacts,
  addContact,
  deleteContact,
} from '../../services/apiServices';

// getItem

export const getItems = createAsyncThunk(
  'items/getItemsStatus',
  async (_, thunkAPI) => {
    const localId = thunkAPI.getState().auth.localId;

    try {
      const data = await getContacts(localId);
      return Object.keys(data || {}).map(id => ({ id, ...data[id] }));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// addItem

export const addItem = createAsyncThunk(
  'items/addItemsStatus',
  async (contact, thunkAPI) => {
    const localId = thunkAPI.getState().auth.localId;
    try {
      const data = await addContact(localId, contact);
      return { id: data.name, ...contact };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// removeItem

export const removeItem = createAsyncThunk(
  'items/removeItemsStatus',
  async (id, thunkAPI) => {
    const localId = thunkAPI.getState().auth.localId;
    try {
      await deleteContact(localId, id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
