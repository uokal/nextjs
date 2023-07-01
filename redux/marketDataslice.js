import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMarketData = createAsyncThunk('market/fetchMarketData', async () => {
  const config = {
    params: {
        performanceId: '0P0000OQN8'
      },
    headers: {
        'X-RapidAPI-Key': 'fd6f8da6c1msh3c647cab50f579fp14d3c2jsn35b4264421b5',
        'X-RapidAPI-Host': 'morning-star.p.rapidapi.com'
    },
  };

  const response = await axios.get('https://api.instantwebtools.net/v1/airlines', config);
  return response.data;
});

const marketDataslice = createSlice({
  name: 'marketData',
  initialState: [],
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMarketData.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default marketDataslice.reducer;
