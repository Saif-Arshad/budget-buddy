import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
    deletebudget: null,
    isLoading: false,
    isError: false,
    error:null
};


export const deleteBudget = createAsyncThunk("deletingBudget", async (formData:any, { rejectWithValue }) => {
    try {
        console.log(formData)
            
        const response = await fetch(`/api/budget/${formData}`, {
            method: 'DELETE',
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

const deleteBudgetSlice = createSlice({
    name: 'deleteSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(deleteBudget.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });

        builder.addCase(deleteBudget.fulfilled, (state, action:any) => {
            state.isLoading = false;
            state.isError = false;
            state.deletebudget = action.payload;
        });

        builder.addCase(deleteBudget.rejected, (state, action:any) => {
            state.isLoading = false;
            state.isError = true;
            state.error= action.error
        });

    },
});

export default deleteBudgetSlice.reducer;
