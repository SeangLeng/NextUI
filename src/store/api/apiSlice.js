import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout, setCredentials, setCurrentUser } from "../features/auth/authSlice";
import { getDecryptedRefreshToken } from "@/lib/cryptography";

// Create base query with authentication
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.access;
    headers.set("content-type", "application/json");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

// Custom base query with re-authentication when token expires
const baseQueryWithReAuth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 401) {
    console.log("object not found")
    const refreshToken = await getDecryptedRefreshToken();
    console.log(refreshToken)
    if (refreshToken) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}accounts/token/refresh/`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ refreshToken }),
          }
        );
        const resultResponse = await response.json();

        if (resultResponse.code === 200) {
          api.dispatch(setCredentials(resultResponse.data));

          // Store the new access token in localStorage
          localStorage.setItem("accessToken", resultResponse.data.accessToken);

          // Retry the original request with the new access token
          result = await baseQuery(args, api, extraOptions);
        } else if (resultResponse.code === 401) {
          api.dispatch(logout());
          // alert("Your session has expired. Please login again.");
        }
      } catch (error) {
        // console.error("Failed to refresh access token", error);
        api.dispatch(logout());
      }
    } else {
      api.dispatch(logout());
      // alert("Your session has expired. Please login again.");
    }
  }
  return result;
};


// Create API slice with custom base query
export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  tagTypes: ["User"], // Tag types are used for cache invalidation
  endpoints: (builder) => ({}),
});