import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './Query/UserApi';

const initialState = {
  name: '',
  number: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.getContacs.matchFulfilled,
      (state, { payload }) => {
        state.name = payload.name;
        state.number = payload.number;
      }
    );
    builder.addMatcher(
      authApi.endpoints.deleteContacts.matchFulfilled,
      (state, { payload }) => {
        // if (state.user.mutations.status === 'fulfilled')
        //   showSuccess('Contacts delete');
        // state.contacts.name = payload.name;
        // state.contacts.number = payload.number;
      }
    );
  },
});

export default contactsSlice.reducer;
