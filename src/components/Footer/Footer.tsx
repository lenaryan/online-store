import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <NavLink to='/'>SmthStore</NavLink>
            <Typography>&copy; SmthStore TM 2023</Typography>
            <NavLink to='cart'>Cart</NavLink>
        </>
    )
}

export default Footer;