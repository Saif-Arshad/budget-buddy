"use client"

import { createSlice } from "@reduxjs/toolkit"
import currencySymbol from '@/data/CurrencySymbols.json'


const initialState ={
    items: currencySymbol

}
export const  Symbols = createSlice({
    name: 'symbols',
    initialState,
    reducers: {

    }



})

export default Symbols.reducer