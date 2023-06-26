import ProductCard from "../ProductCard"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store"
import { useEffect } from "react"
import { IProduct, fetchProducts } from "../../redux/products"
import { Container, Grid, Typography } from "@mui/material"

const MainPage = () => {
    const { products } = useSelector((state: RootState) => state.productsList.products);
    const dispatch = useDispatch<AppDispatch>()
    
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    
    return (
        <Container>
            <Typography variant="h2" component="h1">Smth Store</Typography>
            {/* // TODO: MASONRY??? */}
            <Grid container spacing={4}>
                {
                    products?.map((item: IProduct) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id} >
                            <ProductCard product={item} />
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default MainPage;