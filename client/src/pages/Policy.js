import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p><b>BuyersInn</b> respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes:</p>

          
          <p>we use cookies to save your session</p>
          <p>we save your personal informaion E-mail Address,Password,mobile number.</p>
          <p>We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.</p>
          <p>Buyers Inn's assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal information held by bankruptcy about our Website users is among the assets transferred.</p>
         
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
