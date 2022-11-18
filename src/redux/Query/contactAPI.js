// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const contactApi = createApi({
//   reducerPath: 'contactsApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://62ffc0b59350a1e548e5d275.mockapi.io',
//   }),
//   tagTypes: ['Contact'],
//   endpoints: build => ({
//     fetchContacts: build.query({
//       query: () => `/contacts`,
//       providesTags: ['Contact'],
//     }),
//     deleteContacts: build.mutation({
//       query: contactId => ({
//         url: `/contacts/${contactId}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Contact'],
//     }),
//     createContact: build.mutation({
//       query: newContact => ({
//         url: '/contacts',
//         method: 'POST',
//         body: newContact,
//       }),
//       invalidatesTags: ['Contact'],
//     }),
//   }),
// });

// export const {
//   useFetchContactsQuery,
//   useDeleteContactsMutation,
//   useCreateContactMutation,
// } = contactApi;
