import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const feedbackApi = createApi ({
    reducerPath: 'feedback',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://server-zb.herokuapp.com/',
      }),
      endpoints: builder => ({
        addFeedback: builder.mutation({
          query: body => ({
            url: `posts`,
            method: 'POST',
            body,
          }),
        }),
      }),
})

export const {useAddFeedbackMutation} = feedbackApi; 