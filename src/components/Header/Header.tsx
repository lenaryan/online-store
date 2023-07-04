import { AppBar, Container, Typography } from "@mui/material";
import { NavLink } from "react-router-dom"
import s from './Header.module.css';
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

const Header = () => {
    const products = useSelector((state: RootState) => state.cart.productsInCart);

    const productsCount = products.reduce((sum, item) => sum + item.count, 0);

    return (
        <AppBar position="sticky">
            <Container>
                <div className={s.header}>
                    <NavLink className={s.logo} to='/'><Typography component='span'>SmthStore</Typography></NavLink>
                    <NavLink className={s.cart} to='cart'>
                        <Typography component='span' className={s.cartLink}>
                            Cart{' '}
                            <span className={s.badge}>{ productsCount || 0}</span>
                        </Typography>
                    </NavLink>
                </div>
            </Container>
        </AppBar>
    )
}

export default Header;