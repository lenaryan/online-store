import { Box, TextField, Typography } from "@mui/material"
import s from '../OrderSteps.module.css';

const AddressInfo = () => {
    return (
        <Box marginY="40px" marginX="10px">
            <Typography variant="h5" component="h2" marginBottom="20px">Delivery Address</Typography>
            <form className={s.form}>
                <TextField variant="outlined" label="Country" required />
                <TextField variant="outlined" label="Region" />
                <TextField variant="outlined" label="City" />
                <TextField variant="outlined" label="Street" />
                <TextField variant="outlined" label="House nr." />
                <TextField variant="outlined" label="Appartment" />
                <TextField variant="outlined" label="ZIP Code" required />
            </form>
        </Box>
    )
}

export default AddressInfo