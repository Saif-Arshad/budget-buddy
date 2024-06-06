import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
    budget: null,
    isLoading: false,
    isError: false,
    error:null
};


export const createBudget = createAsyncThunk("Budget", async (formData:any, { rejectWithValue }) => {
    try {
        console.log(formData)
            
        const response = await fetch("/api/budget", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

       

        const data = await response.json();
        console.log(data)
        return data;
    } catch (error:any) {
        return rejectWithValue(error.message);
    }
});

const budgetSlice = createSlice({
    name: 'sliceBudget',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createBudget.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });

        builder.addCase(createBudget.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.budget = action.payload;
        });

        builder.addCase(createBudget.rejected, (state, action:any) => {
            state.isLoading = false;
            state.isError = true;
            state.error= action.error
        });

    },
});

export default budgetSlice.reducer;
