import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from 'react-router-dom';

export default function BasicTable() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/all-orders`);
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const makeStyle = (status) => {
    if (status === "Delivered") {
      return {
        background: "rgb(145 254 159 / 47%)",
        color: "green",
      };
    } else if (status === "Cancelled") {
      return {
        background: "#ffadad8f",
        color: "red",
      };
    } 
     else if (status === "Shipped") {
      return {
        background: "#ffadad8f",
        color: "green",
      };
    } else {
      return {
        background: "yellow",
        color: "black",
      };
    }
  };

  return (
    <div className="Table">
      <h3>Recent Orders</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="left">Buyer</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Additional Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order._id}>
                <TableCell component="th" scope="row">
                  {order.products.map(product => (
                    <div key={product._id}>
                      {product.name} {/* Assuming `name` is a property of the product object */}
                    </div>
                  ))}
                </TableCell>
                <TableCell align="left">{order.buyer.name}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(order.status)}>
                    {order.status}
                  </span>
                </TableCell>
                <TableCell align="left">{order.createdAt}</TableCell>
                <TableCell align="left" className="Details">
                  <Link to={`/orders/${order._id}`}>Details</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
