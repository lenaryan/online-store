import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CartItem from "./CartItem";
import { IProduct } from "../../redux/products";
import { Button, Container, Typography } from "@mui/material";
import s from './Cart.module.css';
import { useEffect, useState } from "react";

const Cart = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const products = useSelector((state: RootState) => state.cart.productsInCart);

    useEffect(() => {
        const productsPrice = products.reduce((sum: number, item: IProduct) => sum += item.price, 0);
        setTotalPrice(productsPrice);
    }, [products.length]);

    return (
        <Container>
            <Typography variant="h2" component="h1" marginTop="40px" marginBottom="40px" textAlign={ !products?.length ? 'center' : 'initial'}>
                Cart{' '}
                { !products?.length && 'is empty'}
            </Typography>
            {
                products?.map((item: IProduct) => <CartItem product={item} key={item.id} />)
            }
            {
                products?.length && (
                    <div className={s.summaryWrap}>
                        <Typography variant="h6" component="span">Summary</Typography>
                        <Typography variant="h5" component="span" fontWeight="bold">${totalPrice}</Typography>
                    </div>
                )
            }
            <div className={s.buttonWrap}>
                {
                    products?.length ? (
                        <Button
                            size="large"
                            color="secondary"
                            variant="contained"
                            href='/order'
                        >
                            Checkout
                        </Button>
                    ) : (
                        <Button
                            size="large"
                            color="secondary"
                            variant="contained"
                            href='/'
                        >
                            Go Shopping
                        </Button>
                    )
                }
            </div>
        </Container>
    )
}

export default Cart;