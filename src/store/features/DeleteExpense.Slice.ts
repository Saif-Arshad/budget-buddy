import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
    deleteExpense: null,
    isLoading: false,
    isError: false,
    error:null
};


export const deleteExpense = createAsyncThunk("deletingExpennse", async (formData:any, { rejectWithValue }) => {
    try {
            
        const response = await fetch(`/api/expense/${formData}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

       

        const data = await response.json();
        return data;
    } catch (error:any) {
        return rejectWithValue(error.message);
    }
});

const deleteExpenseSlice = createSlice({
    name: 'deleteSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(deleteExpense.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });

        builder.addCase(deleteExpense.fulfilled, (state, action:any) => {
            state.isLoading = false;
            state.isError = false;
            state.deleteExpense = action.payload;
        });

        builder.addCase(deleteExpense.rejected, (state, action:any) => {
            state.isLoading = false;
            state.isError = true;
            state.error= action.error
        });

    },
});

export default deleteExpenseSlice.reducer;
