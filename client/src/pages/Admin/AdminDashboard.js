import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import MainDash from '../../components/MainDash/MainDash';
import RightSide from '../../components/RightSide/RightSide';
import Sidebar from '../../components/Sidebar';
import "../../styles/AdminDashboard.css"

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            
            <Sidebar/>
           
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3 user-info-card">
              <h2 className="card-title">Admin Information</h2>
              <div className="user-info">
                <div className="info-item">
                  <span className="info-label">Name:</span>
                  <span className="info-value">{auth?.user?.name}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email:</span>
                  <span className="info-value">{auth?.user?.email}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Contact:</span>
                  <span className="info-value">{auth?.user?.phone}</span>
                </div>
              </div>
            </div>
            <div>

            <MainDash/>
            <RightSide/>
            </div>
          </div>
        </div>
      </div>
      <div>
     
      
    </div>
      
    </Layout>
  );
};

export default AdminDashboard;