import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { Select } from "antd";
import Sidebar from '../../components/Sidebar';
import "../../styles/AdminOrders.css";

const { Option } = Select;

const AdminOrders = () => {
  const [status, setStatus] = useState([
    "Not Process",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled", // Corrected spelling
  ]);
  const [orders, setOrders] = useState([]);
  
  // Fetch orders from the API
  const getOrders = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/all-orders`);
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch orders on component mount
  useEffect(() => {
    getOrders();
  }, []);

  // Handle status change
  const handleChange = async (orderId, value) => {
    try {
      await axios.put(`${process.env.REACT_APP_API}/api/v1/auth/order-status/${orderId}`, {
        status: value,
      });
      getOrders(); // Refresh orders after status change
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin-orders">
      <Sidebar />
      <div className="orders-table">
        <h1 className="table-title">All Orders</h1>
        <table>
          <thead>
            <tr>
              <th>Order #</th>
              <th>Status</th>
              <th>Buyer</th>
              <th>Date</th>
              <th>Payment</th>
              <th>Products</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>
                  <Select
                    bordered={false}
                    onChange={(value) => handleChange(order._id, value)}
                    defaultValue={order.status}
                  >
                    {status.map((s, i) => (
                      <Option key={i} value={s}>
                        {s}
                      </Option>
                    ))}
                  </Select>
                </td>
                <td>{order.buyer.name}</td>
                <td>{moment(order.createAt).fromNow()}</td>
                <td>{order.payment.success ? "Success" : "Failed"}</td>
                <td>
                  {order.products.map((product) => (
                    <div key={product._id}>
                      <img
                        src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
                        alt={product.name}
                        className="product-image"
                      />
                      {product.name}
                    </div>
                  ))}
                </td>
                <td>{order.products.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrders;