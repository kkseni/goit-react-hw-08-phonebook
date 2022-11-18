import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import filterReducer from './filterSlice';
// import contactsReducer from './contactsSlice';
// import { contactApi } from './Query/contactAPI';
import { authApi } from './Query/UserApi';
import userReduser from './userSlice';

// ----- filter persistor -----
const filterPersistConfig = {
  key: 'filter',
  version: 1,
  storage,
};

const persistedFilterReducer = persistReducer(
  filterPersistConfig,
  filterReducer
);

// ----- user persistor -----
const userPersistConfig = {
  key: 'user',
  version: 1,
  storage,
  whitelist: ['token'],
};

const persistedUserReducer = persistReducer(userPersistConfig, userReduser);

// ----- contacts persistor -----
// const contactsPersistConfig = {
//   key: 'contacts',
//   version: 1,
//   storage,
// };

// const persistedContactsReducer = persistReducer(
//   contactsPersistConfig,
//   contactsReducer
// );

export const store = configureStore({
  reducer: {
    filter: persistedFilterReducer,
    // [contactApi.reducerPath]: contactApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    user: persistedUserReducer,
    // contacts: persistedContactsReducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      // contactApi.middleware,
      authApi.middleware
    ),
  ],
});

export const persistor = persistStore(store);
