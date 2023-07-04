import { Box, TextField, Typography } from "@mui/material"
import s from '../OrderSteps.module.css';

const CustomerInfo = () => {
    return (
        <Box marginY="40px" marginX="10px">
            <Typography variant="h5" component="h2" marginBottom="20px">Customer Info</Typography>
            <form className={s.form}>
                <TextField variant="outlined" label="Name" required />
                <TextField variant="outlined" label="Surname" />
                <TextField variant="outlined" label="Phone" type="tel" />
                <TextField variant="outlined" label="E-mail" type="email" required />
            </form>
        </Box>
    )
}

export default CustomerInfo;