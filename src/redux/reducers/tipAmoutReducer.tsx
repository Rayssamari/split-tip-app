import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'tipAmount',
    initialState:{
        billValue: 0,
        numberOfPeople: 0,
        tip: 0, 
        tipCustom: 0,
        resultTipAmount: 0,
        resultTotal: 0
    },
    reducers:{
        setBillValue: (state, action) => {
            state.billValue = action.payload;
        },
        setNumberOfPeople: (state, action) => {
            state.numberOfPeople = action.payload;
        },
        setTip: (state, action) => {
            state.tip = action.payload;
        },
        setTipCustom: (state, action) => {
            state.tipCustom = action.payload;
        },
        calculateTipAmount: (state) => {
            state.resultTipAmount = ((state.billValue * state.tip) / 100) / state.numberOfPeople;
        },
        calculateTotalAmount: (state) => {
            state.resultTotal = (state.billValue + ((state.billValue * state.tip) / 100)) / state.numberOfPeople;
        }
    }
})

export const { setBillValue, setNumberOfPeople, setTip, setTipCustom, calculateTipAmount, calculateTotalAmount } = slice.actions;
export default slice.reducer;