import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export interface ProductsState {
    products: Object
}

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
    const response = await fetch('https://dummyjson.com/products')
    return response.json();
})

// TODO: WTF IS IT RED
export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: {},
    // isLoading: false
    // isError: false
  },
  extraReducers: (builder) => {
    // builder.addCase(fetchProducts.pending, (state, action) => {
    //     state.isLoading = true;
    // })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
        // state.isLoading = false;
        state.products = action.payload;
    })
    // builder.addCase(fetchProducts.rejected, (state, action) => {
    //     state.isError = true;
    //     state.isLoading = false;
    // })
  },
})

export const { getProducts } = productsSlice.actions

export default productsSlice.reducer