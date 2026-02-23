import { BASE_API_URL } from "@/utils/constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

export const fetchUserDetails = createAsyncThunk(
    "user/fetchUserDetails",
    async (query, thunkAPI) => {
        try {
            const { data } = await Axios.get(`${BASE_API_URL}/api/users/profile`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("base_acccess_token")}`,
                },
            });
            return data;
        } catch ({ response }) {
            return thunkAPI.rejectWithValue({ error: response.data });
        }
    }
);

export const createSubscription = createAsyncThunk(
    "user/createSubscription",
    async (createPayload, thunkAPI) => {
        try {
            const { data } = await Axios.post(
                `${BASE_API_URL}/api/subcriptions/new`,
                createPayload,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "base_acccess_token"
                        )}`,
                    },
                }
            );
            return data;
        } catch ({ response }) {
            console.log(response);
            return thunkAPI.rejectWithValue({ error: response.data });
        }
    }
);

export const fetchSubcriptions = createAsyncThunk(
    "subcription/fetchSubcriptions",
    async (query, thunkAPI) => {
        try {
            const { data } = await Axios.get(`${BASE_API_URL}/api/subcriptions`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("base_acccess_token")}`,
                },
            });
            return data;
        } catch ({ response }) {
            return thunkAPI.rejectWithValue({ error: response.data });
        }
    }
);

const userSlice = createSlice({
    name: "user",
    initialState: {
        userDetails: null,
        subcriptions: [],
        userActivities: { data: [] },
        usersList: [],
        loading: "",
        error: "",
        success: "",
    },
    reducers: {
        setUserDetails: (state, action) => {
            state.userDetails = action.payload;
        },


        clearStates: (state, { payload }) => {
            delete state.loading;
            delete state.error;
            delete state.success;
        },
        logoutUser: (state) => {
        },
    },
    extraReducers: {
        [fetchUserDetails.pending]: (state) => {
            state.userDetails = null;
            delete state.error;
            delete state.success;
            state.loading = "FETCH_USER_DETAILS";
        },
        [fetchUserDetails.fulfilled]: (state, action) => {
            state.success = "FETCH_USER_DETAILS";
            state.userDetails = action.payload?.user;
            delete state.loading;
            delete state.error;
        },
        [fetchUserDetails.rejected]: (state, { payload }) => {
            state.error = {
                errorType: "FETCH_USER_DETAILS",
                errorMessage: payload?.error,
            };
            delete state.loading;
        },


        [createSubscription.pending]: (state) => {
            delete state.error;
            delete state.success;
            state.loading = "CREATE_SUBCRIPTION";
        },
        [createSubscription.fulfilled]: (state, action) => {
            state.success = "CREATE_SUBCRIPTION";
            delete state.loading;
            delete state.error;
        },
        [createSubscription.rejected]: (state, { payload }) => {
            state.error = {
                errorType: "CREATE_SUBCRIPTION",
                errorMessage: payload?.error,
            };
            delete state.loading;
        },


        [fetchSubcriptions.pending]: (state) => {
            state.subcriptions = [];
            delete state.error;
            delete state.success;
            state.loading = "FETCH_SUBCRIPTIONS";
        },
        [fetchSubcriptions.fulfilled]: (state, action) => {
            state.success = "FETCH_SUBCRIPTIONS";
            state.subcriptions = action.payload;
            delete state.loading;
            delete state.error;
        },
        [fetchSubcriptions.rejected]: (state, { payload }) => {
            state.error = {
                errorType: "FETCH_SUBCRIPTIONS",
                errorMessage: payload?.error,
            };
            delete state.loading;
        },


    },
});

export const {
    clearStates,
    setUserDetails,
    logoutUser,
} = userSlice.actions;
export default userSlice.reducer;