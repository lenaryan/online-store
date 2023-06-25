import { Link } from "react-router-dom"
import ProductCard from "../ProductCard"

const MainPage = () => {
    return (
        <>
            <h1>Store</h1>
            <Link to='/cart'>Cart</Link>
            <div>
                { [1, 2, 3, 4, 5].map((item, index) => <ProductCard key={index} />)
                }
            </div>
        </>
    )
}

export default MainPage;