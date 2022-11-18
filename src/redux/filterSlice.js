import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterItems(state, action) {
      state.value = action.payload;
    },
  },
});

export const { filterItems } = filterSlice.actions;

export default filterSlice.reducer;
