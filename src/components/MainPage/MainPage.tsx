import ProductCard from "../ProductCard"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store"
import { useEffect, useState } from "react"
import { IProduct, fetchProducts } from "../../redux/products"
import { Container, Grid, Typography } from "@mui/material"
import Sorting from "./Sorting"

const MainPage = () => {
    const { products } = useSelector((state: RootState) => state.productsList.products);
    const dispatch = useDispatch<AppDispatch>()
    const [sortedProducts, setSortedProducts] = useState(products);
    
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    useEffect(() => {
        setSortedProducts(products);
    }, [products.length]);
    
    return (
        <Container>
            <Typography variant="h2" component="h1" marginTop="40px" marginBottom="40px" fontWeight="bold">SmthStore</Typography>
            {
                sortedProducts?.length ? (
                    <>
                        <Sorting products={products} setSortedProducts={setSortedProducts} />
                        <Grid container spacing={4} marginTop="5px">
                            {
                                sortedProducts?.map((item: IProduct) => (
                                    <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                                        <ProductCard product={item} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </>
                ) : (
                    <Typography variant="h4" component="h2" marginTop="40px" marginBottom="40px">Nothing to show</Typography>
                )
            }
        </Container>
    )
}

export default MainPage;