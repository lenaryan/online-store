import { Button, Container, TextField, Typography } from "@mui/material"
import { FC } from "react";

interface IBankCardInfo {
    onBankCardClick: () => void
}

const BankCardInfo: FC<IBankCardInfo> = ({ onBankCardClick }) => {
    const handleSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        onBankCardClick();
    }

    return (
        <Container>
            <Typography variant="h5" component="h1">Bank Card Info</Typography>
            <form onSubmit={handleSubmit}>
                <TextField variant="outlined" label="Card Number" required />
                <TextField variant="outlined" label="Valid till" required />
                <TextField variant="outlined" label="Card Holder" required />
                <TextField variant="outlined" label="CVV" required />
                <Button type="submit">Next Step</Button>
            </form>
        </Container>
    )
}

export default BankCardInfo;