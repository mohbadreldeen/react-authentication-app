import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    credentials: "include",
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
        headers.set("Accept", "application/json");
        headers.set("Content-Type", "application/json");
        return headers;
    },
});

const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
        // Invalidate session cache on 401 - RTK Query will refetch
        api.dispatch(apiSlice.util.invalidateTags(["Session"]));
    }
    return result;
};

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: baseQueryWithReauth,
    tagTypes: ["User", "Session"],
    endpoints: () => ({}),
});
