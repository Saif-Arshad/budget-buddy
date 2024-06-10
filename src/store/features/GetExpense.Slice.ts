import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
    allExpense: null,
    isLoading: true,
    isError: false,
    error:null
};


export const getExpense = createAsyncThunk("gettigExpense", async (currentBudget:any,{ rejectWithValue }:any) => {
        console.log("🚀 ~ getExpense ~ currentBudget:", currentBudget)
    try {
        const response = await fetch(`/api/expense/${currentBudget}`, {
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

const getExpenseSlice = createSlice({
    name: 'gettingExpense',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getExpense.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });

        builder.addCase(getExpense.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.allExpense = action.payload;
        });

        builder.addCase(getExpense.rejected, (state, action:any) => {
            state.isLoading = false;
            state.isError = true;
            state.error= action.error
        });

    },
});

export default getExpenseSlice.reducer;
