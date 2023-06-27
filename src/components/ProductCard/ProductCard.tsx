import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { FC } from "react";
import { IProduct } from "../../redux/products";
import { addProductToCart } from "../../redux/cart";
import { useDispatch } from "react-redux";
import s from './ProductCard.module.css'

interface IProductData {
    product: IProduct;
}

const ProductCard: FC<IProductData> = ({ product }) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(addProductToCart(product));
    }

    return (
        <Card className={s.card} elevation={8}>
            <CardMedia
                component="img"
                height="160"
                image={product.thumbnail}
                alt={product.title}
            />
            <CardContent className={s.cardContent}>
                <Typography gutterBottom variant="h5" component="h2" fontWeight="bold">
                    {product.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    ${product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    color="secondary"
                    variant="contained"
                    endIcon={<AddShoppingCartIcon />}
                    onClick={handleClick}
                    fullWidth
                >
                    Add To Cart
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard;