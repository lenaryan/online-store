import { Card, CardContent, Typography, CardActions, IconButton, CardMedia } from "@mui/material";
import { IProduct } from "../../../redux/products";
import { FC } from "react";
import { removeProductFromCart } from "../../../redux/cart";
import { useDispatch } from "react-redux";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import s from './CartItem.module.css';

interface IProductInCart {
    product: IProduct;
}

const CartItem: FC<IProductInCart> = ({ product }) => {
    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch(removeProductFromCart(product));
    }

    return (
        <Card elevation={8} className={s.cartItem}>
            <CardMedia
                component="img"
                sx={{ width: 150, height: 150 }}
                image={product.thumbnail}
                alt={product.title}
            />
            <CardContent className={s.content}>
                <Typography variant="h5" color="text.secondary" component="span">
                    {product.title}
                </Typography>
                <Typography variant="h5" component="span">
                    ${product.price}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label="delete" onClick={handleRemove} color="secondary">
                    <DeleteForeverIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default CartItem;