import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export interface IProduct {
    brand: string,
    category: string,
    description: string,
    discountPercentage: number,
    id: number,
    images: string[],
    price: number,
    rating: number,
    stock: number,
    thumbnail: string,
    title: string
}
export interface ProductsState {
    products: {
        products: IProduct[]
    }
}

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
    const response = await fetch('https://dummyjson.com/products')
    return response.json();
})

export const productsSlice = createSlice({
  name: 'productsList',
  initialState: {
    products: {
        products: []
    },
    // isLoading: false
    // isError: false
  },
  reducers: {},
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

export default productsSlice.reducer