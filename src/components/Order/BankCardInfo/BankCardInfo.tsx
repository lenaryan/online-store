import { Button, Typography } from "@mui/material"
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
        <>
            <Typography>Bank Card Info</Typography>
            <form onSubmit={handleSubmit}>
                <Button type="submit">Next Step</Button>
            </form>
        </>
    )
}

export default BankCardInfo;