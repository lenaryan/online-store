import { Link } from "react-router-dom";

const ThankYou = () => {
    return (
        <>
            <h1>Thank you for your order!</h1>
            <Link to='/'>Return to the store</Link>
        </>
    )
}

export default ThankYou;