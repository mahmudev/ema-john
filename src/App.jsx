import React from "react";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Products from "./component/Products";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Products></Products>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
