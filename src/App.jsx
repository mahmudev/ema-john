import React from "react";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Products from "./component/Products";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
}

export default App;
