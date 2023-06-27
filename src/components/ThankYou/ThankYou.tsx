import { useEffect } from "react";
import { clearCart } from "../../redux/cart";
import { useDispatch } from "react-redux";
import { Button, Container, Typography } from "@mui/material";
import s from './ThankYou.module.css';

const ThankYou = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearCart());
    }, []);

    return (
        <Container className={s.wrap}>
            <Typography fontWeight="bold" variant="h2" component="h1" marginTop="40px" marginBottom="40px">Thank you for your order!</Typography>
            <Button variant="contained" color="secondary" href='/' className={s.button} size="large">Return to the store</Button>
        </Container>
    )
}

export default ThankYou;