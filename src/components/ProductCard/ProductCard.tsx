import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductCard = ({data}) => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="150"
                    image={data.thumbnail}
                    alt={data.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.title}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.description}
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