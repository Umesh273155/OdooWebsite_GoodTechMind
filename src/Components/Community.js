import "./Style/Community.css";
import { GitHub } from "@material-ui/icons";
import { YouTube } from "@material-ui/icons";
import { Twitter } from "@material-ui/icons";
import { LinkedIn } from "@material-ui/icons";
import { Instagram } from "@material-ui/icons";
import { DateRange } from "@material-ui/icons";
import { Facebook } from "@material-ui/icons";
import { MusicNoteSharp } from "@material-ui/icons";
import { Call } from "@material-ui/icons";
const Community = () => {
 
  return (
    <div className="CommunityBox">
      <div className="communityChildBox1">
        <div className="learnBox">
          <div style={{ color: "orange", borderBottom: "1px solid orange", marginBottom: "10px" }}>
            <h4 className="communityBoxHeader" style={{ color: "orange" }}>
              LEARN
            </h4>
          </div>

          <p className="communityPara">Tutorials</p>
          <p className="communityPara">Documentation</p>
          <p className="communityPara">Certificate</p>
          <p className="communityPara">Planet Odoo</p>

          <div className="empowerEducation" style={{ marginTop: "3rem" }}>
            <div style={{ color: "orange", borderBottom: "1px solid orange", marginBottom: "7px" }}>
              <h4 className="communityBoxHeader" style={{ color: "orange" }}>
                EMPOWER EDUCATION
              </h4>
            </div>

            <p className="communityPara">Education Program</p>
            <p className="communityPara">Scale Up! Business Game </p>
            <p className="communityPara">Visit Odoo</p>
          </div>
        </div>

        <div className="getsoftwareBox">
          <h4 className="communityBoxHeader">GET THE SOFTWARE</h4>
          <hr style={{ marginBottom: "10px" }} />
          <p className="communityPara">Download</p>
          <p className="communityPara">Compare Editions</p>
          <p className="communityPara">Release</p>
        </div>

        <div className="collaborateBox">
          <h4 className="communityBoxHeader">COLLABORATE</h4>
          <hr style={{ marginBottom: "10px" }} />
          <p className="communityPara">Github</p>
          <p className="communityPara">Forum</p>
          <p className="communityPara">Events</p>
          <p className="communityPara">Translations</p>
          <p className="communityPara">Become a Partner</p>
          <p className="communityPara">Register your Accounting Firm</p>
        </div>

        <div className="getServices">
          <h4 className="communityBoxHeader">GET SERVICES</h4>
          <hr style={{ marginBottom: "10px" }} />
          <p className="communityPara">Find a Partner</p>
          <p className="communityPara" style={{ marginBottom: "1rem" }}>
            Find an Accountant
          </p>

          <p className="communityPara">Meet an Expert </p>
          <p className="communityPara" style={{ marginBottom: "1rem" }}>
            Customer Reference
          </p>

          <p className="communityPara">Implementation Services</p>
          <p className="communityPara">Support</p>
          <p className="communityPara">Upgrades</p>
        </div>
      </div>
      <div className="communityChildBox2"></div>
      <hr style={{ marginBottom: "10px" }} />
      <div className="communityFooterBox" style={{ marginTop: "0" }}>
        <div className="icons_box_community">
        <a href="https:/github.com"className="fbLink_"> <GitHub className="materialIcons" id="githubb" /></a> 

        <a href="https:/youtube.com"className="fbLink_"> <YouTube className="materialIcons" id="youtube" /></a> 
        <a href="https:/twitter.com"className="fbLink_"><Twitter className="materialIcons" id="twitter" /></a>  
        <a href="https:/linkedin.com"className="fbLink_">  <LinkedIn className="materialIcons" id="linkedin" /></a> 
        <a href="https:/facebook.com"className="fbLink_"> <Facebook className="materialIcons" id="facebook" /></a> 
        <a href="https:/instagram.com"className="fbLink_"><Instagram className="materialIcons" id="instagram" /></a>  
        <a href="https:/music.com"className="fbLink_"> <MusicNoteSharp className="materialIcons" id="music" /></a> 
        <a href="https:/music.com"className="fbLink_"><img src="uc.png" alt="ln" className="icnCommunity"></img></a>
        </div>
        <div className="phone_calender_box">
          <div className="call_calender" style={{ display: "flex", marginRight: "5%" }}>
            <Call className="materialIcons_" id="call" />
            <p className="CommunityFooterParagraph">+91 7140501000</p>
          </div>
          <div className="calender_para" style={{ display: "flex" }}>
            <DateRange className="materialIcons_" id="date" />

            <p className="CommunityFooterParagraph" style={{ marginRight: "13px" }}>
              Get a demo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Community;
