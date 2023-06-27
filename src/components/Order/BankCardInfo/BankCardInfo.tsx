import { Button, TextField, Typography } from "@mui/material"
import { FC } from "react";
import s from '../OrderSteps.module.css';

interface IBankCardInfo {
    onBankCardClick: () => void
}

const BankCardInfo: FC<IBankCardInfo> = ({ onBankCardClick }) => {
    const handleSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        onBankCardClick();
    }

    return (
        <>
            <Typography variant="h5" component="h2" marginBottom="20px">Bank Card Info</Typography>
            <form onSubmit={handleSubmit} className={s.form}>
                <TextField variant="outlined" label="Card Number" required />
                <TextField variant="outlined" label="Valid till" required />
                <TextField variant="outlined" label="Card Holder" required />
                <TextField variant="outlined" label="CVV" required />
                <Button variant="contained" color="secondary" type="submit" size="large" className={s.button}>Next Step</Button>
            </form>
        </>
    )
}

export default BankCardInfo;