import { Typography } from "@mui/material"
import { NavLink } from "react-router-dom"

const AddressInfo = () => {
    return (
        <>
            <Typography>Delivery Address</Typography>
            <NavLink to="/thank-you">Confirm Order</NavLink>
        </>
    )
}

export default AddressInfo