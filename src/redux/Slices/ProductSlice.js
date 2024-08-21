import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
  name: "productCart",
  initialState: {items: [], length: 0 },
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload);
      state.length = state.items.length;
    },
    remove: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.length = state.items.length;
    },
    emptyCart: (state, action) => {
      state.items = [];
      state.length = 0;
    },
  },
});

export const { add, remove, emptyCart } = ProductSlice.actions;
export default ProductSlice.reducer;