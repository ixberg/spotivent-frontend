// src/store/ticketSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TicketState {
  ticketOrders: { name: string; quantity: number; price: number }[];
}

const initialState: TicketState = {
  ticketOrders: [],
};

const ticketSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    setTicketQuantity(
      state,
      action: PayloadAction<{ name: string; quantity: number; price: number }>
    ) {
      const { name, quantity, price } = action.payload;
      const existingTicket = state.ticketOrders.find(
        (ticket) => ticket.name === name
      );
      if (existingTicket) {
        existingTicket.quantity = quantity;
      } else {
        state.ticketOrders.push({ name, quantity, price });
      }
      state.ticketOrders = state.ticketOrders.filter(
        (ticket) => ticket.quantity > 0
      );
    },
    resetTicketOrders(state) {
      state.ticketOrders = [];
    },
  },
});

export const { setTicketQuantity, resetTicketOrders } = ticketSlice.actions;

export default ticketSlice.reducer;
