import CustomerInfo from "./CustomerInfo";
import BankCardInfo from "./BankCardInfo";
import AddressInfo from "./AddressInfo";
import { useState } from "react";

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

    return (
        <>
            <h1>Order</h1>
            {
                customerShow && <CustomerInfo onCustomerClick={handleCustomerClick} />
            }
            {
                cardShow && <BankCardInfo onBankCardClick={handleBankCardClick} />
            }
            {
                addressShow && <AddressInfo />
            }
        </>
    )
}

export default Order;