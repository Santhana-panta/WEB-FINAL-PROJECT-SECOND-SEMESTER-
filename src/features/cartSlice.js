import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] }; 
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id, title, price, image, qty } = action.payload;
      const found = state.items.find(i => i.id === id);
      if (found) found.qty += qty;
      else state.items.push({ id, title, price, image, qty });
    },
    setQty: (state, action) => {
      const { id, qty } = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) item.qty = Math.max(1, qty);
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(i => i.id !== id);
    },
    clearCart: (state) => { state.items = []; },
  },
});

export const { addItem, setQty, removeItem, clearCart } = cartSlice.actions;

export const selectItemCount = (state) =>
  state.cart.items.reduce((s, i) => s + i.qty, 0);

export const selectSubtotal = (state) =>
  state.cart.items.reduce((s, i) => s + i.qty * Number(i.price || 0), 0);

export default cartSlice.reducer;