import { Button, Typography } from "@mui/material"
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
                
                <Button type="submit">Next Step</Button>
            </form>
        </>
    )
}

export default CustomerInfo;