import Header from "./Component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Footer from "./Component/Footer";
import useFetch from "./CustomHooks/useFetch";
function App() {
  const { products, loading } = useFetch("https://fakestoreapi.com/products");
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home products={products} loading={loading} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
