// Dashboard.jsx

import React from "react";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import SidebarUser from '../../components/SidebarUser';
import Avatar from "../../components/Avatar/Avatar";
import "../../styles/Dashboard.css";

const Dashboard = () => {
  const [auth] = useAuth();

  

  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container-flui m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <SidebarUser/>
          </div>
          <div className="col-md-9">
            <div className="card user-info-card">
              <div className="user-info">
                <Avatar imageUrl={auth?.user?.avatarUrl} altText={auth?.user?.name} />
                <div>
                  <h3 className="user-name">{auth?.user?.name}</h3>
                  <p className="user-email">{auth?.user?.email}</p>
                  <p className="user-address">{auth?.user?.address}</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
