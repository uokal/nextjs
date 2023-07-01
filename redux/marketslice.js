import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMarket = createAsyncThunk('market/fetchMarket', async () => {
  const config = {
    headers: {
      Authorization: 'Bearer A1pPW90gN6c0Co6oef0jCWfDaCYFATul', // Add your Authorization token here
    },
  };

  const response = await axios.get('https://api.mockuuups.studio/v1/mockups', config);
  return response.data;
});

const marketslice = createSlice({
  name: 'market',
  initialState: [],
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMarket.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default marketslice.reducer;
