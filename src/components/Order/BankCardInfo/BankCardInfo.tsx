import { Box, TextField, Typography } from "@mui/material"
import s from '../OrderSteps.module.css';

const BankCardInfo = () => {
    return (
        <Box marginY="40px" marginX="10px">
            <Typography variant="h5" component="h2" marginBottom="20px">Bank Card Info</Typography>
            <form className={s.form}>
                <TextField variant="outlined" label="Card Number" required />
                <TextField variant="outlined" label="Valid till" required />
                <TextField variant="outlined" label="Card Holder" required />
                <TextField variant="outlined" label="CVV" required />
            </form>
        </Box>
    )
}

export default BankCardInfo;