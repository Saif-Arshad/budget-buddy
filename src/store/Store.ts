import { configureStore } from '@reduxjs/toolkit'
import symbols from './features/CurrencySymbols.Slice'
export const store = configureStore({
  reducer: {
    currency : symbols

  },
})