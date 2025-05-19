import Header from "./Component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    // <div className="font-Afacad ">
    // </div>

    <BrowserRouter>
      <Header />
      <Routes>{/* <Route path="/" element={< />}>   */}</Routes>
    </BrowserRouter>
  );
}

export default App;
