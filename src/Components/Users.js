import "./Style/Users.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Users = () => {
  const [divBox, setDivBox] = useState(true);

  const navigator = useNavigate();
  return (
    <div className="usersContainer">
      <div className="disappearedhoveredIconsBox" style={{ marginBottom: "0" }}>
        {divBox ? (
          <button onClick={() => setDivBox(false)} className="toggleBox">
            {" "}
            <div className="loveduserAndIndiaCompanyBox" style={{ margin: "0", padding: "0" }}>
              <div style={{ fontWeight: "600", paddingTop: "5px", marginLeft: "5%" }}>
                <p className="lovedUser" style={{ marginBottom: "0", marginTop: "0" }}>
                  LOVED BY 1000+
                </p>
                <p className="indiasCompany" style={{ marginTop: "0", marginBottom: "0" }}>
                  INDIAN COMPANIES
                </p>
              </div>
              <img src="pcii.png" alt="" className=""></img>
              <img src="Geniusminds.png" alt="" className=""></img>
              <img src="Toyota.png" alt="" className=""></img>
              <img src="Trident.png" alt="" className=""></img>
              <img src="group.png" alt="" className=""></img>
              <img src="Hyundai.png" alt="" className=""></img>
              <img src="Magic.png" alt="" className=""></img>
            </div>{" "}
          </button>
        ) : (
          <button className="ourCustomer">Our Customer</button>
        )}

        <div className="usersImagesContainer">
          <div className="noOfUserTextContentBox">
            <h1 className="sevenText">7</h1>
            <div>
              <h1 className="MillionUsers">Millions users</h1>
              <p className="growbusinessPara">Grow their business with Odoo</p>
            </div>
          </div>

          <img src="mosaic_2.jpg" className="mosaic_2" alt="mosaic_2"></img>
        </div>
        <div className="usersfooterBox">
          <div className="potentialgrowthAndnoCreditCard">
            <h1 style={{ marginBottom: "0" }}>Unleash your growth potential</h1>
            <p className="nocreditPara">No credit card required-instant access</p>
          </div>

          <button className="startNowBtn" onClick={() => navigator("/tryFreePage")}>
            Start Now-It's Free
          </button>
        </div>
      </div>
    </div>
  );
};
export default Users;
