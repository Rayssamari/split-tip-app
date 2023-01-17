import { configureStore } from "@reduxjs/toolkit";
import tipAmountReducer from './reducers/tipAmoutReducer';

export const store = configureStore({
    reducer: {
        tipAmount: tipAmountReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;