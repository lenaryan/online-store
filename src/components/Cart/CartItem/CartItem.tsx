import { Card, CardContent, Typography, CardActions, IconButton, CardMedia } from "@mui/material";
import { IProduct } from "../../../redux/products";
import { FC } from "react";
import { removeProductFromCart, increaseProductCount, decreaseProductCount } from "../../../redux/cart";
import { useDispatch } from "react-redux";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import s from './CartItem.module.css';

interface IProductInCart {
    product: IProduct,
    count: number,
}

const CartItem: FC<IProductInCart> = ({ count, product }) => {
    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch(removeProductFromCart(product));
    }

    const handleIncrease = () => {
        dispatch(increaseProductCount(product));
    }

    const handleDecrease = () => {
        dispatch(decreaseProductCount(product));
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
                <IconButton aria-label="delete" onClick={handleDecrease} color="secondary" sx={{ marginLeft: 'auto' }}>
                    <RemoveCircleOutlineIcon />
                </IconButton>
                <Typography variant="h5" component="span" marginX="15px">
                    {count}
                </Typography>
                <IconButton aria-label="delete" onClick={handleIncrease} color="secondary">
                    <AddCircleOutlineIcon />
                </IconButton>
                <Typography variant="h5" component="span" width="100px" textAlign="right">
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