import "./Style/Home.css";
import { Link, useNavigate } from "react-router-dom";
import { Sms } from "@material-ui/icons";
import LanguageTranslator from "../LanguageTranslator/LanguageTranslator";
const Home = () => {
 

  const navigate = useNavigate();
  return (
    <div className="homeContainer">
      <nav className="navbarContainer">
        <h1 className="odoo">
          <span style={{ color: "orange" }}>O</span>doo
        </h1>
        <div className="appCommunityPricingBox">
          <Link to="/appPage" className="linkHoveringClass">
            <h3 className="navbarText1">
              App <img src="Vector.png" alt="vector1" className="vector1"></img>
            </h3>
          </Link>
          <Link to="/community" className="linkHoveringClass">
            <h3 className="navbarText1">
              Community <img src="Vector.png" alt="vector1" className="vector1"></img>
            </h3>
           
          </Link>
          <Link to="/pricing" className="linkHoveringClass">
            <h3 className="navbarText1">
              Pricing <img src="Vector.png" alt="vector1" className="vector1"></img>
            </h3>

          </Link>
         
        </div>
        <div className="signinTryfreeBox">
          <Link to="/signIn" className="linkHoveringClass">
            <h3 className="signin">Sign in</h3>
          </Link>

          <button className="tryitBtn" style={{height:"auto",padding:"5px 4px"}} onClick={() => navigate("/tryFreePage")}>
            Try it free
          </button>
        </div>
        <LanguageTranslator/>
      </nav>
      <div className="homeInnerContainerSection">
        <section className="homeChildFirstSection">
          <div className="locationRegisterBox">
            <img src="in.png" alt="indianflag" className="indianflag"></img>
            <br></br>
            <div className="locationRegisterText">
              <h4 className="location">Odoo 16 Roadshow-Pune(India).Jun 9,2023</h4>
              <Link to="/resister" style={{ textDecoration: "none" }}>
                <h3 className="registeration">REGISTER</h3>
              </Link>
            </div>
          </div>
          <div className="homeTextSectionBox">
            <p className="amazondeserveText">Amazing employees deserve</p>
            <h1 className="amazingsoftwareText">amazing software...</h1>
            <div className="para2Container">
              <p className="paraText2">The only plateform you will ever need to help run your business: </p>
              <p className="paraText2">integrated apps ,kept simple ,and loved by millions of happy users.</p>
            </div>

            <div className="startnowAndMeetexpertbtnBox">
              <button className="statnowBtn" onClick={() => navigate("/tryFreePage")}>
                Start Now.It's Free
              </button>
              <button className="MeetExpertBtn" onClick={()=>navigate('/meetexpert')}>Meet an Expert</button>
            </div>
            <div className="flagTimingPlaystoreBox" style={{ display: "inline-block" }}>
              <div className="indianFlagtimingBox">
                <img src="in.png" alt="indianflag" className="indianflag"></img>
                <div className="timingBox" style={{ color: "white" }}>
                  <h5>079 40 500 100</h5>
                  <h5> Mon-Fri 10AM-7PM</h5>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="homeChildsecondSection">
          <div className="homePageDesktopImageContainer" style={{ position: "relative" }}>
            <img src="homepage-desktop.png" alt="deskop" className="destopImage"></img>
            <div style={{ zIndex: "100", display: "flex", alignItems: "end", marginBottom: "30px" }}>
              <button className="msgBtn" style={{ position: "fixed", backgroundColor: "#089097" }} onClick={() => navigate("/chat")}>
                <Sms style={{ width: "35px", height: "35px", color: "white" }} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Home;
