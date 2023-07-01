import { configureStore } from '@reduxjs/toolkit';
import marketslice from './marketslice';
import marketDataslice from './marketDataslice';

const store = configureStore({
  reducer: {
    market: marketslice,
    marketData: marketDataslice
  },
});

export default store;
