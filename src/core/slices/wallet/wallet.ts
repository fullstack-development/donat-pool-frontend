import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { type Status, type WalletMode } from 'shared/types';

import { initialState } from './constants';

export const slice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    updateWalletMode: (state, action: PayloadAction<WalletMode>) => {
      state.mode = action.payload;
      state.status = 'success';
    },
    setStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
  },
});

export const { updateWalletMode, setStatus } = slice.actions;

export default slice.reducer;