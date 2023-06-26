import {RootState} from "../../store";

export const selectCartModule = (state: RootState) => state.cart

export const selectTicketAmount = (state: RootState, id: string) => selectCartModule(state)[id] || 0;

export const totalTicketsAmount = (state: RootState) => Object.values(selectCartModule(state)).reduce((sum, current) => {
    console.log(state)
    return sum + current;
}, 0);
