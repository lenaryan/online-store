import { useEffect } from "react";
import { Link } from "react-router-dom";
import { clearCart } from "../../redux/cart";
import { useDispatch } from "react-redux";

const ThankYou = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearCart());
    }, []);

    return (
        <>
            <h1>Thank you for your order!</h1>
            <Link to='/'>Return to the store</Link>
        </>
    )
}

export default ThankYou;