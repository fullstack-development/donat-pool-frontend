import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { UserInfo, Config } from '@/shared/types/common';

import { initialState } from './constants';

export const slice = createSlice({
  name: 'appInfo',
  initialState,
  reducers: {
    setProtocol: (state, action: PayloadAction<Config>) => {
      state.protocol = action.payload;
      state.error = initialState.error;
      state.status = 'success';
    },
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
      state.error = initialState.error;
      state.status = 'success';
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.userInfo = initialState.userInfo;
      state.protocol = initialState.protocol;
      state.status = 'error';
    },
    setRequesting: (state) => {
      state.status = 'requesting';
      state.error = initialState.error;
    },
  },
});

export const { setProtocol, setUserInfo, setError, setRequesting } = slice.actions;
export const { reducer } = slice;
export default slice;