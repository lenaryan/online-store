import { Container, TextField, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"

const AddressInfo = () => {
    return (
        <Container>
            <Typography variant="h5" component="h1">Delivery Address</Typography>
            <form>
                <TextField variant="outlined" label="Country" required />
                <TextField variant="outlined" label="Region" />
                <TextField variant="outlined" label="City" />
                <TextField variant="outlined" label="Street" />
                <TextField variant="outlined" label="House nr." />
                <TextField variant="outlined" label="Appartment" />
                <TextField variant="outlined" label="ZIP Code" required />
            </form>
            <NavLink to="/thank-you">Confirm Order</NavLink>
        </Container>
    )
}

export default AddressInfo