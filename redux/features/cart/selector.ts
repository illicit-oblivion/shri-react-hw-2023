import {RootState} from "../../store";
import {createSelector} from "reselect";

export const selectCartModule = (state: RootState) => state.cart

export const selectTicketAmount = (state: RootState, id: string) => selectCartModule(state)[id] || 0;

export const totalTicketsAmount = createSelector([selectCartModule], (tickets) => Object.values(tickets).reduce((sum, current) => {
    return sum + current;
}, 0));

export const selectedTicketIds = createSelector([selectCartModule], (tickets) => Object.keys(tickets));
