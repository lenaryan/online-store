import { Button, TextField, Typography } from "@mui/material"
import s from '../OrderSteps.module.css';
import { useNavigate } from "react-router-dom";

const AddressInfo = () => {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        navigate('/thank-you');
    }

    return (
        <>
            <Typography variant="h5" component="h2" marginBottom="20px">Delivery Address</Typography>
            {/* TODO: choose house on map */}
            <form className={s.form} onSubmit={handleSubmit}>
                <TextField variant="outlined" label="Country" required />
                <TextField variant="outlined" label="Region" />
                <TextField variant="outlined" label="City" />
                <TextField variant="outlined" label="Street" />
                <TextField variant="outlined" label="House nr." />
                <TextField variant="outlined" label="Appartment" />
                <TextField variant="outlined" label="ZIP Code" required />
                <Button type="submit" variant="contained" color="secondary" size="large" className={s.button}>Confirm Order</Button>
            </form>
        </>
    )
}

export default AddressInfo