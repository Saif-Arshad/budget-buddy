import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
    newBudget: null,
    isLoading: false,
    isError: false,
    error:null
};


export const updateBudget = createAsyncThunk("update", async (formData:any, { rejectWithValue }) => {
    try {
            
        const response = await fetch("/api/budget", {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

       

        const data = await response.json();
        return data;
    } catch (error:any) {
        return rejectWithValue(error.message);
    }
});

const updateBudgetSlice = createSlice({
    name: 'updateSliceBudget',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateBudget.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });

        builder.addCase(updateBudget.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.newBudget = action.payload;
        });

        builder.addCase(updateBudget.rejected, (state, action:any) => {
            state.isLoading = false;
            state.isError = true;
            state.error= action.error
        });

    },
});

export default updateBudgetSlice.reducer;
