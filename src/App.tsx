import Header from "./Component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyContext from "./CustomHooks/MyContext";
import Home from "./Page/Home";
import useFetch from "./CustomHooks/useFetch";

function App() {
  const { products, loading } = useFetch("https://fakestoreapi.com/products");
  return (
    // <div className="font-Afacad ">
    // </div>
    <BrowserRouter>
      <MyContext.Provider value={{ products, loading }}>
        <Header />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
