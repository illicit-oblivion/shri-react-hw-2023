import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: Record<string, number> = {};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: (state, {payload}: PayloadAction<string> )=> {
            const count = state[payload] || 0;
            state[payload] = count + 1;
        },
        decrement: (state, {payload}: PayloadAction<string>)=> {
            const count = state[payload]  || 0;
            if(!count) {
                return;
            }

            if (count === 1) {
              delete state[payload];
              return;
            }

            state[payload] = count - 1;
        },
        reset: () => initialState,
    }
})

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
