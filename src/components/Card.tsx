import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductCard = () => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
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