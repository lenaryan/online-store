import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <>
            <NavLink to='/'>SmthStore</NavLink>
            <NavLink to='cart'>Cart</NavLink>
        </>
    )
}

export default Header;