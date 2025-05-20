import Header from "./Component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
function App() {
  return (
    // <div className="font-Afacad ">
    // </div>

    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
