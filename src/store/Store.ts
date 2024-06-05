import { configureStore } from '@reduxjs/toolkit'
import symbols from './features/CurrencySymbols.Slice'
import createBudget from './features/AddBudget.Slice'
export const store = configureStore({
  reducer: {
    currency : symbols,
    budget : createBudget

  },
})