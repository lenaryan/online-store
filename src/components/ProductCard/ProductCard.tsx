import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { FC } from "react";
import { IProduct } from "../../redux/products";

interface IProductData {
    product: IProduct;
}

const ProductCard: FC<IProductData> = ({ product }) => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="150"
                    image={product.thumbnail}
                    alt={product.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.title}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" variant="contained" endIcon={<AddShoppingCartIcon />}>
                    Add To Cart
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard;