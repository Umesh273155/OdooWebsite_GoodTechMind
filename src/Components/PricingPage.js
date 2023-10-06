import "./Style/Pricing.css";
import React, { useState } from "react";
import Footer from "./Footer"
const PricingPage = () => {
  const [answer1, setAnswer1] = useState(false);
  const [answer2, setAnswer2] = useState(false);
  const [answer3, setAnswer3] = useState(false);
  const [answer4, setAnswer4] = useState(false);
  const [answer5, setAnswer5] = useState(false);
  const [answer6, setAnswer6] = useState(false);
  const [answer7, setAnswer7] = useState(false);
  const [answer8, setAnswer8] = useState(false);
  
  
  return (
    <div className="PricingPageContainer" style={{ marginTop: "0", paddingTop: "2rem" }}>
      <h1 className="pricingHeading">You are not dreaming</h1>
      <p>
        Yearly{" "}
        <span>
          <button className="yearlyMonthlyBtn"></button>
        </span>
        Monthly
      </p>
      <div className="contentBox">
        <div className="OnefreeAppBox">
          <h2> One App Free</h2>
          <h3 style={{ color: "#99678b" }}>
            Rs <span className="count">0</span>
          </h3>
          <p style={{ marginTop: "25px" }}>
            For <b>one app only</b>, unlimited users{" "}
          </p>
          <p>Odoo Online</p>
          <div className="startBtnBox_first">
            <button className="startnowBtn_first">START NOW</button>
          </div>
        </div>
        <div className="OnefreeAppBox" id="FreeAppBoxSecond">
          <h2>Standard</h2>
          <div style={{ display: "flex", marginBottom: "20px" }}>
            <h2 style={{ marginBottom: "3px", color: "orange" }}>
              Rs <span className="count">615</span>{" "}
            </h2>
            <div style={{ marginTop: "5px", marginBottom: "0" }}>
              <h5 style={{ marginBottom: "3px", color: "orange" }}>
                .00 &nbsp; <span style={{ color: "black", textDecoration: "line-through", textDecorationColor: "red" }}> 751.80 Rs *</span>
              </h5>
              <p style={{ marginTop: "0" }}>/user/month</p>
            </div>
          </div>
          <h5 className="allapps" style={{ marginBottom: "1rem", color: "rgb(82, 80, 80);", marginTop: "0" }}>
            All apps
          </h5>
          <p>Odoo Online</p>
          <div className="startBtnBox_middle">
            <button className="startnowBtn_middle">START NOW</button>
            <br></br>
            <br></br>
            <button className="freeTrialBtn_middle">FREE TRIAL</button>
          </div>
        </div>

        <div className="OnefreeAppBox__">
          <h2 className="allapps_">Custom</h2>
          <div style={{ display: "flex", marginBottom: "1rem" }}>
            <h2 style={{ color: "#99678b" }}>
              Rs <span className="count">915</span>
            </h2>
            <div style={{ marginTop: "5px" }}>
              <h5 style={{ marginBottom: "3px", color: "#99678b" }}>
                .60 &nbsp; <span style={{ color: "black", textDecoration: "line-through", textDecorationColor: "red" }}>1,142.40 Rs *</span>
              </h5>
              <p style={{ marginTop: "0" }}>/user/month</p>
            </div>
          </div>
          <h5 className="allapps" style={{ marginBottom: "10px", color: "rgb(82, 80, 80)" }}>
            All apps
          </h5>
          <p className="pricingPara_">Odoo Online/Odoo.sh**/On-</p>
          <p className="pricingPara_">Premise</p>
          <p className="pricingPara_">Odoo Studio</p>
          <p className="pricingPara_">Multi-Company</p>
          <p className="pricingPara_" style={{ marginBottom: "20px" }}>
            External API
          </p>
          <div className="startBtnBox_last">
            <button className="startnowBtn_last" style={{ marginBottom: "20px" }}>
              START NOW
            </button>

            <button className="freeTrialBtn_last">FREE TRIAL</button>
          </div>
        </div>
      </div>
      <p className="standardAndCustomPlansPara"> The Standard and Custom plans include all apps for a single fee:</p>
      <div className="pricingIcons">
        <div>
          <img src="Sales.svg" alt="sale" className="xyz"></img>
          <h5 style={{ marginLeft: "2rem", color: "rgb(66, 66, 66)" }}>Sales</h5>
        </div>

        <div>
          <img src="marketing.svg" alt="" className="xyz"></img>
          <h5 style={{ marginLeft: "2rem", color: "rgb(66, 66, 66)" }}>Marketing</h5>
        </div>
        <div>
          <img src="sign.svg" alt="" className="xyz"></img>
          <h5 style={{ marginLeft: "2rem", color: "rgb(66, 66, 66)" }}>Sign</h5>
        </div>
        <div>
          <img src="websitebuilder.svg" alt="" className="xyz"></img>
          <h5 style={{ marginLeft: "2rem", color: "rgb(66, 66, 66)" }}>Website</h5>
        </div>
        <div>
          <img src="accounting.svg" alt="" className="xyz"></img>
          <h5 style={{ marginLeft: "2rem", color: "rgb(66, 66, 66)" }}>Accounting</h5>
        </div>
        <div>
          <img src="CRM.svg" alt="" className="xyz"></img>
          <h5 style={{ marginLeft: "2rem", color: "rgb(66, 66, 66)" }}>CRM</h5>
        </div>
        <div>
          <img src="invountry.svg" alt="xyz" className="xyz"></img>
          <h5 style={{ marginLeft: "2rem", color: "rgb(66, 66, 66)" }}>Inventory</h5>
        </div>
        <div>
          <img src="hr.svg" alt="" className="xyz"></img>
          <h5 style={{ marginLeft: "2rem", color: "rgb(66, 66, 66)" }}>HR</h5>
        </div>

        <div>
          <img src="hr.svg" alt="" className="xyz"></img>
          <h5 style={{ marginLeft: "2rem", color: "rgb(66, 66, 66)" }}>Project</h5>
        </div>
        <div>
          <img src="Pos.svg" alt="" className="xyz"></img>
          <h5 style={{ marginLeft: "2rem", color: "rgb(66, 66, 66)" }}>POS</h5>
        </div>
      </div>

      <div className="andManyMore_allOurPlansPara">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h4 style={{ color: "#089097", marginTop: "20px" }} id="onemoreway">
            ...and many more
          </h4>
        </div>
        <div className="allOurPlansPara">
          <p className="allplan__">
            All our plans include <b>unlimited support, hosting </b>and <b>maintenance</b>.
          </p>
          <p className="allplan__">With no hidden costs, no limit on features or data: enjoy real transparency!</p>
          <br></br>
          <p className="allplan__">(*) The discount is valid for 12 months, for initial users ordered.</p>
          <p className="allplan__">(**) Cost for Odoo.sh hosting not included.</p>
        </div>
        <div className="questionBox">
          <h1 className="anyquestion">Any Question ?</h1>
          <p className="administratorPara">
            If the answer to your question is not on this page ,please contact our <b style={{ color: "#089097" }}>administrator.</b>{" "}
          </p>
          <div style={{ textAlign: "start", paddingLeft: "30px" }}>
            <button onClick={() => setAnswer1(!answer1)} className="question">
              {" "}
              <strong className="dot">.</strong> Do I really have access to hundereds of apps of apps and modules for a single price?
            </button>
            {answer1 ? <p className="ans">Yes, you are not dreaming.</p> : null}
            <br></br>
            <button onClick={() => setAnswer2(!answer2)} className="question">
              {" "}
              <strong className="dot">.</strong> What's included in the subscription ?
            </button>
            {answer2 ? (
              <p className="ans">
                All our plans include access to hundreds of Odoo apps on scalable cloud infrastructure, including hosting, incremental daily backups on two continents, email integration, top-notch
                security, 24/7 monitoring, and a control center to manage your Odoo environment.
                <h5>See detailed terms & conditions.</h5>
                <ul>
                  <li>Hosting on Odoo.sh for custom developments (hosting on Odoo Online is free)</li>
                  <li>Implementation service and access to Odoo expert services</li>
                  <li>In-App-Purchase credits: SMS, contacts auto-complete, lead generation, IA to scan vendor bills & expenses.</li>
                </ul>
              </p>
            ) : null}
            <br></br>
            <button onClick={() => setAnswer3(!answer3)} className="question">
              {" "}
              <strong className="dot">.</strong> What is On-premise / Odoo.sh?
            </button>
            {answer3 ? (
              <p className="ans">
                The standard plan is hosted on Odoo Online, our cloud infrastructure to host databases without custom modules. With the custom plan, you can host on Odoo Online at no extra cost, or
                one of these two options:
                <p>1. Download Odoo Enterprise and host it yourself</p>
                <p>2. Host on Odoo.sh, the continuous integration platform to host your development, staging and production branches, allowing you to develop or use custom modules.</p>
                <p>
                  More information on <b>https://odoo.sh</b>{" "}
                </p>
              </p>
            ) : null}
            <br></br>
            <button onClick={() => setAnswer4(!answer4)} className="question">
              {" "}
              <strong className="dot">.</strong> Where can I get implementation services ,and how much does it cost ?
            </button>
            {answer4 ? (
              <p className="ans">
                If you need implementation service: project management, business needs analysis, data import, customizations, developments, training, etc., we have two options:
                <br></br>
                1. Small companies <b>50 employees</b> usually work directly with Odoo, using success packs. Check out our project estimator to know the cost of a project, based on your needs. 2.
                Mid-size and large companies <b>50 employees</b>usually work with a partner who offers local project management services: <b>https://odoo.com/partners</b>
              </p>
            ) : null}
            <br></br>
            <button onClick={() => setAnswer5(!answer5)} className="question">
              {" "}
              <strong className="dot">.</strong> Why do I have multiple apps with the One App Free plan ?
            </button>
            {answer5 ? (
              <p className="ans">
                If you choose an app that depends on other apps "e.g., eCommerce depends on Website and Invoicing", you get these required apps for free too. So, you can start with any app, and we
                guarantee that its usage is free for unlimited users, forever, whatever the dependencies of the app.
              </p>
            ) : null}
            <br></br>
            <button onClick={() => setAnswer6(!answer6)} className="question">
              {" "}
              <strong className="dot">.</strong> What is difference between standard plan and custom plan ?
            </button>

            {answer6 ? (
              <p className="ans">
                The custom plan is for companies that want to manage multiple companies on a single database and that need to customize Odoo through Odoo Studio, custom developments or through the
                API.
              </p>
            ) : null}
            <br></br>
            <button onClick={() => setAnswer7(!answer7)} className="question">
              {" "}
              <strong className="dot">.</strong> Can I switch from a hosted plan (Odoo Online) to Odoo Enterprise or the other way around ?
            </button>

            {answer7 ? (
              <p className="ans">
                When using Odoo Online, you can download a backup of your database at any time through the control center. You own your data!
                <br></br>
                Odoo Online or Odoo Enterprise <b>On-premise or Odoo.sh</b> is the same software. Only the hosting and infrastructure are different: emails, backups, database redundancies, etc.
                <br></br>
                Our cloud infrastructure runs on the latest version of Odoo with regular upgrades. On-premise users must use the latest stable version of Odoo. If you would like to switch from Odoo
                Online to Odoo On-premise, the best time to make this change is immediately following the release of the newest stable version.
              </p>
            ) : null}
            <br></br>
            <button onClick={() => setAnswer8(!answer8)} className="question">
              {" "}
              <strong className="dot">.</strong>What does External API?
            </button>

            {answer8 ? (
              <p className="ans">
                External API means you set up external software <b>such as legacy systems, reporting engines,etc.</b> that initiates calls to the Odoo API <b>JSON-RPC or XML-RPC</b> to query, retrieve
                or update data stored in Odoo.
                <br></br>
                When the call is initiated from Odoo, this is NOT considered an "External API." For example, when an Odoo app uses an external service such as payment providers{" "}
                <b>Stripe, PayPal, Adyen, etc.</b>, delivery carriers <b>UPS, FedEx, DHL, etc.,</b> VoIP providers, or bank synchronization, it is part of the standard plan.
              </p>
            ) : null}
          </div>
        </div>
      </div>
      <Footer style={{marginTop:"50px"}}/>
    </div>
  );
};
export default PricingPage;
