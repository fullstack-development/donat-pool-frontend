import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './constants';

const slice = createSlice({
  name: 'fundsReceiving',
  initialState,
  reducers: {
    setSuccess: (state) => {
      state.status = 'success';
      state.error = initialState.error;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.status = 'error';
    },
    setRequesting: (state) => {
      state.error = initialState.error;
      state.status = 'requesting';
    },
    reset: (state) => {
      state.error = initialState.error;
      state.status = 'default';
    },
  },
});

const {
  reducer,
  actions: { setError, setRequesting, setSuccess, reset },
} = slice;

export { slice as default, reducer, setError, setRequesting, setSuccess, reset };
