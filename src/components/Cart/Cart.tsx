import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import CartItem from "./CartItem";
import { IProduct } from "../../redux/products";
import { Container, Typography } from "@mui/material";

const Cart = () => {
    const products = useSelector((state: RootState) => state.cart.productsInCart);

    return (
        <Container>
            <Typography variant="h2" component="h1">Cart</Typography>
            {
                products?.map((item: IProduct) => <CartItem product={item} key={item.id} />)
            }
            <Link to='/order'>Checkout</Link>
        </Container>
    )
}

export default Cart;