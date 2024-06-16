"use client"

import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
    expense: null,
    isLoading: false,
    isError: false,
    error:null
};


export const createExpense = createAsyncThunk("Expense", async (formData:any, { rejectWithValue }) => {
    try {
            
        const response = await fetch("/api/expense", {
            method: 'POST',
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

const expenseSlice = createSlice({
    name: 'sliceExpense',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createExpense.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });

        builder.addCase(createExpense.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.expense = action.payload;
        });

        builder.addCase(createExpense.rejected, (state, action:any) => {
            state.isLoading = false;
            state.isError = true;
            state.error= action.error
        });

    },
});

export default expenseSlice.reducer;
