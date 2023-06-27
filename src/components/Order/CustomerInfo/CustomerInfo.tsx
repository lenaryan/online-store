import { Button, TextField, Typography } from "@mui/material"
import { FC } from "react";
import s from '../OrderSteps.module.css';

interface ICustomerInfo {
    onCustomerClick: () => void
}

const CustomerInfo: FC<ICustomerInfo> = ({ onCustomerClick }) => {
    const handleSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        onCustomerClick();
    }

    return (
        <>
            <Typography variant="h5" component="h2" marginBottom="20px">Customer Info</Typography>
            <form onSubmit={handleSubmit} className={s.form}>
                <TextField variant="outlined" label="Name" required />
                <TextField variant="outlined" label="Surname" />
                <TextField variant="outlined" label="Phone" type="tel" />
                <TextField variant="outlined" label="E-mail" type="email" required />
                <Button variant="contained" color="secondary" type="submit" size="large" className={s.button}>Next Step</Button>
            </form>
        </>
    )
}

export default CustomerInfo;