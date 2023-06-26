import { Link } from "react-router-dom"
import ProductCard from "../ProductCard"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store"
import { useEffect } from "react"
import { IProduct, fetchProducts } from "../../redux/products"

const MainPage = () => {
    const { products } = useSelector((state: RootState) => state.productsList.products);
    const dispatch = useDispatch<AppDispatch>()
    
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    console.log('products', products);
    
    return (
        <>
            <h1>Store</h1>
            <Link to='/cart'>Cart</Link>
            <div>
                { products?.map((item: IProduct, index: number) => <ProductCard key={index} product={item} />)
                }
            </div>
        </>
    )
}

export default MainPage;