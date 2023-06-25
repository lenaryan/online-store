import { Link } from "react-router-dom"
import ProductCard from "../ProductCard"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { useEffect } from "react"
import { fetchProducts } from "../../redux/products"

const MainPage = () => {
    // TODO: FIX THIS SHIT
    const { products } = useSelector((state: RootState) => state.products.products);
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    console.log('products', products);
    
    return (
        <>
            <h1>Store</h1>
            <Link to='/cart'>Cart</Link>
            <div>
                { products?.map((item, index) => <ProductCard key={index} data={item} />)
                }
            </div>
        </>
    )
}

export default MainPage;