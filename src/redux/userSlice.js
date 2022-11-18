import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './Query/UserApi';
import { showError, showSuccess, showWarning } from 'utils/Toast/toastMessage';

const initialState = {
  name: '',
  email: '',
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // getCurrentSuccess: (state, { payload }) => {
    //   state.email = payload.email;
    //   state.name = payload.name;
    // },
  },
  extraReducers: builder => {
    // userLoginAuth робота з логіном
    builder.addMatcher(
      authApi.endpoints.loginAuth.matchFulfilled,
      (state, { payload }) => {
        const { user, token } = payload;
        state.email = user.email;
        state.name = user.name;
        state.token = token;
      }
    );

    // todo
    // userLoginAuth робота з логіном (якщо помилка)
    builder.addMatcher(
      authApi.endpoints.loginAuth.matchRejected,
      (state, { payload }) => {
        showWarning('User is not found');
      }
    );

    // userCreateAuth робота створення нового кристувача, (якщо успішно)
    builder.addMatcher(
      authApi.endpoints.createAuth.matchFulfilled,
      (state, { payload }) => {
        const { user, token } = payload;
        state.email = user.email;
        state.name = user.name;
        state.token = token;
      }
    );

    // userCreateAuth робота створення нового кристувача, (якщо помилка)
    builder.addMatcher(
      authApi.endpoints.createAuth.matchRejected,
      (state, { payload }) => {
        state = payload.status;
        switch (state) {
          case 400:
            showError('❌Bad Request');
            break;
          case 500:
            alert('🤷‍♂️ Ooops, something went wrong');
            break;
          default:
            return;
        }
      }
    );
    // userSuccess робота, коли успішно отримали Токен користувача
    builder.addMatcher(
      authApi.endpoints.currentAuth.matchFulfilled,
      (state, { payload }) => {
        state.email = payload.email;
        state.name = payload.name;
        showSuccess('Successful login');
      }
    );
    // userError робота, коли помилка при отриманні Токену
    builder.addMatcher(
      authApi.endpoints.currentAuth.matchRejected,
      (state, { payload }) => {
        if (payload?.status === 401) {
          state.token = '';
          showWarning('No token, access closed');
        }
      }
    );
    // userLogout робота при розлогіненні користувача
    builder.addMatcher(authApi.endpoints.logOutAuth.matchFulfilled, state => {
      state.email = initialState.email;
      state.name = initialState.name;
      state.token = initialState.name;
    });
  },
});

// export const { loginSuccess, getCurrentSuccess } = userSlice.actions;

export default userSlice.reducer;
