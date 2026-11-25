import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Add a plant to the cart
        addItem: (state, action) => {
            state.items.push({
                ...action.payload,
                quantity: 1
            });
        },

        // Remove a plant from the cart
        removeItem: (state, action) => {
            state.items = state.items.filter(
                (item) => item.name !== action.payload
            );
        },

        // Update the quantity of a plant
        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload;

            const item = state.items.find(
                (item) => item.name === name
            );

            if (item) {
                item.quantity = quantity;
            }
        }
    }
});

// Export action creators
export const { addItem, removeItem, updateQuantity } =
    cartSlice.actions;

// Export reducer
export default cartSlice.reducer;