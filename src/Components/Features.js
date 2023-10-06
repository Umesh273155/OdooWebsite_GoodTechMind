import "./Style/Features.css";
import { useNavigate } from "react-router-dom";
const Features = () => {
  const navigate=useNavigate()
  return (
    <div className="FeaturesContainer">
      <h1 className="featureHeading">
        An <strong className="app_">app</strong> for every need
      </h1>
      <div className="FeatureiconsBox">
        <div className="boxforAddingdiscription">
          <p style={{ marginBottom: "5px" }} className="feature_heading_">BOOST YOUR SALES</p>
          <div className="iconsbox1">
            <div classname="iconsAndName">
              <img src="CRM.svg" alt="crm" className="crm"></img>
              <p className="FeatureNamepara">CRM</p>
            </div>
            <div className="iconsAndName">
              <img src="Pos.svg" alt="crm" className="crm"></img>
              <p className="FeatureNamepara">POS</p>
            </div>
            <div className="iconsAndName">
              <img src="Sales.svg" alt="crm" className="crm"></img>
              <p className="FeatureNamepara">Sales</p>
            </div>
          </div>
        </div>

        <div className="boxforAddingdiscription">
          <p style={{ marginBottom: "5px" }} className="feature_heading_">INTEGRATE YOUR SERVICES</p>
          <div className="iconsbox1">
            <div className="iconsAndName">
              <img src="Project.svg" alt="crm" className="crm"></img>
              <p className="FeatureNamepara">Project</p>
            </div>

            <div className="iconsAndName">
              <img src="Timesheet.svg" alt="crm" className="crm"></img>
              <p className="FeatureNamepara">Timesheet</p>
            </div>
            <div className="iconsAndName">
              <img src="helpdesk.svg" alt="crm" className="crm"></img>
              <p className="FeatureNamepara">Helpdesk</p>
            </div>
          </div>
        </div>

        <div className="boxforAddingdiscription" style={{ textAlign: "center" }}>
          <p style={{ marginBottom: "5px" }} className="feature_heading_">STREAMLINE YOUR OPERATIONS</p>
          <div className="iconsbox1">
            <div className="iconsAndName">
              <img src="invountry.svg" alt="crm" className="crm"></img>
              <p className="FeatureNamepara">Inventory</p>
            </div>
            <div className="iconsAndName">
              <img src="mrp.svg" alt="crm" className="crm"></img>
              <p className="FeatureNamepara">MRP</p>
            </div>
            <div className="iconsAndName">
              <img src="purchase.svg" alt="crm" className="crm"></img>
              <p className="FeatureNamepara">MRP</p>
            </div>
          </div>
        </div>
      </div>

      <div className="FeatureiconsBox_">
        <div className="boxforAddingdiscription_">
          <p style={{ marginBottom: "5px", marginLeft: "15%" }} className="feature_heading_">BUILD STUNNING WEBSITES</p>
          <div className="iconsbox2_">
            <div classname="iconsAndName_">
              <img src="websitebuilder.svg" alt="crm" className="crm"></img>
              <p className="FeatureNamepara">Website Builder</p>
            </div>
            <div className="iconsAndName_" style={{ marginLeft: "2.5rem" }}>
              <img src="ecommerce.svg" alt="crm" className="crm"></img>
              <p className="FeatureNamepara">eCommerce</p>
            </div>
          </div>
        </div>

        <div className="boxforAddingdiscription_">
          <p style={{ marginBottom: "5px", marginLeft: "20%" }} className="feature_heading_">MANAGE YOUR FINANCES</p>
          <div className="iconsbox2_">
            <div className="iconsAndName_" style={{ marginLeft: "3rem" }}>
              <img src="invoicing.png" alt="crm" className="invoicing"></img>
              <p className="FeatureNamepara">Invoicing</p>
            </div>

            <div className="iconsAndName_" style={{ marginLeft: "2.5rem" }}>
              <img src="accounting.svg" alt="crm" className="crm"></img>
              <p className="FeatureNamepara">Accounting</p>
            </div>
          </div>
        </div>

        <div className="boxforAddingdiscription_">
          <p style={{ marginBottom: "5px", marginLeft: "10%" }} className="feature_heading_">AMPLIFY YOUR MARKETING</p>
          <div className="iconsbox2_">
            <div className="iconsAndName_" style={{ marginLeft: "3rem" }}>
              <img src="teligram.svg" alt="crm" className="crm"></img>
              <p className="FeatureNamepara" style={{ marginBottom: "0" }}>
                Email{" "}
              </p>
              <p style={{ marginTop: "0" }}>Marketing</p>
            </div>
            <div className="iconsAndName_" style={{ marginLeft: "2.5rem" }}>
              <img src="setting.svg" alt="crm" className="crm"></img>
              <p className="FeatureNamepara" style={{ marginBottom: "0" }}>
                Marketing{" "}
              </p>
              <p style={{ marginTop: "0" }}>Automation</p>
            </div>
          </div>
        </div>

        <div className="boxforAddingdiscription_">
          <p style={{ marginBottom: "5px", marginLeft: "20%" }} className="feature_heading_">CUSTOMIZE & DEVLOP</p>
          <div className="iconsbox2_" style={{ marginLeft: "3rem" }}>
            <div className="iconsAndName_">
              <img src="studio.svg" alt="crm" className="crm"></img>
              <p className="FeatureNamepara">Studio</p>
            </div>
            <div className="iconsAndName_" style={{ marginLeft: "2.5rem" }}>
              <img src="sh.jpg" alt="crm" className="odooImg"></img>
              <p className="FeatureNamepara">odoo.sh</p>
            </div>
          </div>
        </div>
      </div>
    <button className="addManyMore" onClick={()=>navigate("/andmanymore")}>... and many more</button>
    </div>
  );
};

export default Features;
