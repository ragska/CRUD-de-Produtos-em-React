import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavBar from "./components/Navbar";  
import Sidebar from "./components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import Products from "./Pages/Products";  
import ProductForm from "./components/ProductForm";

function App() { 
  return(
    <Router>
      <AppNavBar />
      <div className="d-flex">
        <Sidebar />
        <main className="flex-grow-1 p-3">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/new" element={<ProductForm />} />
            <Route path="/products/edit/:id" element={<ProductForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;