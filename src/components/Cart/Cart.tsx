import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import CartItem from "./CartItem";
import { IProduct } from "../../redux/products";

const Cart = () => {
    const products = useSelector((state: RootState) => state.cart.productsInCart);

    return (
        <>
            <h1>Cart</h1>
            {
                products?.map((item: IProduct) => <CartItem product={item} key={item.id} />)
            }
            <Link to='/order'>Proceed</Link>
        </>
    )
}

export default Cart;