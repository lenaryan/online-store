import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { FC, SetStateAction, useState } from "react";
import { IProduct } from "../../../redux/products";

interface ISorting {
    products: IProduct[];
    setSortedProducts: SetStateAction;
}

const namesAZ = (products: IProduct[]): IProduct[] => {
    return [...products].sort((a: IProduct, b: IProduct) => Number(a.title > b.title));
}

const namesZA = (products: IProduct[]): IProduct[] => {
    return [...products].sort((a: IProduct, b: IProduct) => Number(a.title < b.title));
}

const priceUp = (products: IProduct[]): IProduct[] => {
    return [...products].sort((a: IProduct, b: IProduct) => a.price - b.price);
}

const priceDown = (products: IProduct[]): IProduct[] => {
    return [...products].sort((a: IProduct, b: IProduct) => b.price - a.price);
}

const Sorting: FC<ISorting> = ({ products, setSortedProducts }) => {
    const [alignment, setAlignment] = useState('');

    const handleChange = (e: any) => {
        setAlignment(e.target.value);

        switch (e.target.value) {
            case 'nameup': setSortedProducts(namesAZ(products)); break;
            case 'namedown': setSortedProducts(namesZA(products)); break;
            case 'priceup': setSortedProducts(priceUp(products)); break;
            case 'pricedown': setSortedProducts(priceDown(products)); break;
            default: setSortedProducts(products);
        }
    }

    return (
        <>
            <ToggleButtonGroup
                color="secondary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
            >
                <ToggleButton value="nameup">Name A-Z</ToggleButton>
                <ToggleButton value="namedown">Name Z-A</ToggleButton>
                <ToggleButton value="priceup">Price Up</ToggleButton>
                <ToggleButton value="pricedown">Price Down</ToggleButton>
            </ToggleButtonGroup>
        </>
    )
}

export default Sorting;