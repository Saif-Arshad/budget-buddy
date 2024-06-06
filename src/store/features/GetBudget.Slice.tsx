import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
    allBudget: null,
    isLoading: true,
    isError: false,
    error:null
};


export const getBudget = createAsyncThunk("gettigBudget", async (currentUser:any,{ rejectWithValue }:any) => {
    console.log(currentUser)
    try {
        const response = await fetch(`/api/budget/${currentUser}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        console.log(data)
        return data;

      
} catch (error:any) {
    return rejectWithValue(error.message);
}
});

const getBudgetSlice = createSlice({
    name: 'gettingBudget',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBudget.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });

        builder.addCase(getBudget.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.allBudget = action.payload;
        });

        builder.addCase(getBudget.rejected, (state, action:any) => {
            state.isLoading = false;
            state.isError = true;
            state.error= action.error
        });

    },
});

export default getBudgetSlice.reducer;
