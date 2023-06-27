import { Container, Typography } from "@mui/material";
import { NavLink } from "react-router-dom"
import s from './Footer.module.css'

const Footer = () => {
    return (
        <>
            <Container>
                <div className={s.footer}>
                    <NavLink to='/'>SmthStore</NavLink>
                    <Typography component='span'>&copy; SmthStore TM 2023</Typography>
                    <NavLink to='cart'>Cart</NavLink>
                </div>
            </Container>
        </>
    )
}

export default Footer;