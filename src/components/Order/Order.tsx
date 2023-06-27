import CustomerInfo from "./CustomerInfo";
import BankCardInfo from "./BankCardInfo";
import AddressInfo from "./AddressInfo";
import { useState } from "react";
import { Container, Typography } from "@mui/material";

const Order = () => {
    const [customerShow, setCustomerShow] = useState(true);
    const [cardShow, setCardShow] = useState(false);
    const [addressShow, setAddressShow] = useState(false);

    const handleCustomerClick = () => {
        setCustomerShow(false);
        setCardShow(true);
    }

    const handleBankCardClick = () => {
        setCardShow(false);
        setAddressShow(true);
    }

    // TODO: https://mui.com/material-ui/react-stepper/ 
    return (
        <Container>
            <Typography variant="h2" component="h1" marginTop="40px" marginBottom="40px">Order</Typography>
            {
                customerShow && <CustomerInfo onCustomerClick={handleCustomerClick} />
            }
            {
                cardShow && <BankCardInfo onBankCardClick={handleBankCardClick} />
            }
            {
                addressShow && <AddressInfo />
            }
        </Container>
    )
}

export default Order;