import { useEffect } from "react";
import { Link } from "react-router-dom";
import { clearCart } from "../../redux/cart";
import { useDispatch } from "react-redux";
import { Container } from "@mui/material";

const ThankYou = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearCart());
    }, []);

    return (
        <Container>
            <h1>Thank you for your order!</h1>
            <Link to='/'>Return to the store</Link>
        </Container>
    )
}

export default ThankYou;