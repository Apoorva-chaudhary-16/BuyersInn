import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Sidebar from '../../components/Sidebar';
import "../../styles/Products.css"; // Import your CSS file
import Layout from "../../components/Layout/Layout";

const Products = () => {
  const [products, setProducts] = useState([]);

  // Get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product`);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  // Lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
    <div className="products-container">
      <Sidebar />
      <div className="products-list">
        <h1 className="products-title">All Products List</h1>
        <div className="product-cards">
          {products.map((product) => (
            <Link
              key={product._id}
              to={`/dashboard/admin/product/${product.slug}`}
              className="product-link"
            >
              <div className="product-card">
                <img
                  src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
                  alt={product.name}
                  className="product-image-admin"
                />
                <div className="product-details">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Products;
