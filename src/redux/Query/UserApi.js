import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://goit-phonebook-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const { token } = getState().user;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Auth', 'Contacts'],
  endpoints: build => ({
    // useCurrentAuthQuery отримання інформації щодо користувача
    currentAuth: build.query({
      query: () => '/users/current',
      providesTags: ['Auth'],
    }),
    // useLoginAuthMutation логін користувача
    loginAuth: build.mutation({
      query: payload => ({
        url: `/users/login`,
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json',
        },
      }),
      providesTags: ['Auth'],
    }),
    // useLogOutAuthMutation розлогінення користувача
    logOutAuth: build.mutation({
      query: () => ({
        url: `/users/logout`,
        method: 'POST',
      }),
      invalidatesTags: ['Auth'],
    }),
    // useCreateAuthMutation створення нового користувача
    createAuth: build.mutation({
      query: newAuth => ({
        url: '/users/signup',
        method: 'POST',
        body: newAuth,
        headers: {
          'Content-type': 'application/json',
        },
      }),
      invalidatesTags: ['Auth'],
    }),
    // useGetContacsQuery отримання усіх контактів користувача
    getContacs: build.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    // useCreateContactsMutation створення нового контакту
    createContacts: build.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
        headers: {
          'Content-type': 'application/json',
        },
      }),
      invalidatesTags: ['Contacts'],
    }),
    // useDeleteContactsMutation видалення контакту
    deleteContacts: build.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useLoginAuthMutation,
  useCreateAuthMutation,
  useCurrentAuthQuery,
  useLogOutAuthMutation,
  useGetContacsQuery,
  useCreateContactsMutation,
  useDeleteContactsMutation,
} = authApi;
