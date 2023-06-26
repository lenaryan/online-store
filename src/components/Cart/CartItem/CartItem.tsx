import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import { IProduct } from "../../../redux/products";
import { FC } from "react";
import { removeProductFromCart } from "../../../redux/cart";
import { useDispatch } from "react-redux";

interface IProductInCart {
    product: IProduct;
}

const CartItem: FC<IProductInCart> = ({ product }) => {
    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch(removeProductFromCart(product));
    }

    return (
        <Card>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {product.title}
                </Typography>
                <Typography variant="h5" component="div">
                    {product.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleRemove}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem;