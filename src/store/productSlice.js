import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    productToFind:'',
}
const productSlice = createSlice({
    name: 'Product',
    initialState,
    reducers: {
       setProduct:(state,action)=>{
          state.productToFind=action.payload
          
       }
    }
})
export const {setProduct} = productSlice.actions
export default productSlice.reducer