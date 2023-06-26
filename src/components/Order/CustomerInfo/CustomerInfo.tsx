import { Button, TextField, Typography } from "@mui/material"
import { FC } from "react";

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
            <Typography>Customer Info</Typography>
            <form onSubmit={handleSubmit}>
                <TextField variant="outlined" label="Name" required />
                <TextField variant="outlined" label="Surname" />
                <TextField variant="outlined" label="Phone" type="tel" />
                <TextField variant="outlined" label="E-mail" type="email" required />
                <Button type="submit">Next Step</Button>
            </form>
        </>
    )
}

export default CustomerInfo;