import { AppBar, Container, Typography } from "@mui/material";
import { NavLink } from "react-router-dom"
import s from './Header.module.css';

const Header = () => {
    return (
        <AppBar position="sticky">
            <Container>
                <div className={s.header}>
                    <NavLink className={s.logo} to='/'><Typography>SmthStore</Typography></NavLink>
                    <NavLink className={s.cart} to='cart'><Typography>Cart</Typography></NavLink>
                </div>
            </Container>
        </AppBar>
    )
}

export default Header;