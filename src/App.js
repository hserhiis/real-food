import "./scss/app.scss";
import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

export const ProductContext = React.createContext(undefined);

function App() {
  return (
    <>
      <Router>
        <ProductContext.Provider value={"text"}>
          <div className="wrapper">
            <Header />
            <div className="content">
              <div className="container">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
          </div>
        </ProductContext.Provider>
      </Router>
    </>
  );
}

export default App;
