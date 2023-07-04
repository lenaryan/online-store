import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import MainPage from "./components/MainPage";
import Cart from "./components/Cart";
import Order from "./components/Order";
import Layout from "./Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order" element={<Order />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App
