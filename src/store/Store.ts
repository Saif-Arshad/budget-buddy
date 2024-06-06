import { configureStore } from '@reduxjs/toolkit'
import symbols from './features/CurrencySymbols.Slice'
import createBudget from './features/AddBudget.Slice'
import getBudget from './features/GetBudget.Slice'
import budgetSlice from './features/DeleteBudget.Slice'
export const store = configureStore({
  reducer: {
    currency : symbols,
    budget : createBudget,
    getBudget:getBudget,
    deleteBudget:budgetSlice

  },
})