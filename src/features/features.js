import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    cart: []
}

const features = createSlice({
    name: "e-store",
    initialState,
    reducers: {
        bringProducts: (state, {payload})=>{
            state.products = payload;
        },
        addToCart: (state, {payload})=>{
            const check = state.cart.findIndex((i) => i.id === payload.id);
            if(check >= 0){
                state.cart[check].QTY += 1;
            } else {
                const items ={...payload, QTY : 1};
                state.cart.push(items);
            }
        },
        minusItem: (state, { payload }) =>{
            const checkCart = state.cart.findIndex((el) => el.id === payload.id);
            const check = state.cart[checkCart].QTY
            if(check > 1){
                state.cart[checkCart].QTY -= 1
            }else if (check === 1){
                const remove = state.cart.filter(el => el.id !== payload.id)
            state.cart = remove
            }
        },
        removeItem: (state, {payload})=>{
            const remove = state.cart.filter((i)=> i.id !== payload.id);
            state.cart = remove;
        },
        clearCart: (state)=>{
            state.cart = [];
        },
        total: (state, {payload})=>{
            let amount = 0;
            let total = 0;
            state.cart.forEach((item) => {
                amount += item.QTY;
                total += item.QTY * item.price;
            });
            state.amount = amount;
            state.total = total;
        }
    },
});

export const {bringProducts, addToCart, removeItem, clearCart, total, minusItem} = features.actions

export default features.reducer