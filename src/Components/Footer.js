
import "./Style/Footer.css";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram"
import YouTubeIcon from "@material-ui/icons/YouTube"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedinIcon from "@material-ui/icons/LinkedIn"
import TwitterIcon from "@material-ui/icons/Twitter"
import MusicNoteIcon from "@material-ui/icons/MusicNote"
import EmailIcon from '@material-ui/icons/Email';
const Footer=()=>{
 return (
    <div className="footerContainer" style={{marginTop:"0",backgroundAttachment:"fixed",zIndex:"-1"}}>
  <h1 className="footerHeaderOdoo"> Odoo</h1>
<div style={{ display:"flex"}}>
  <div className="FooterContentLeft">
  <div className="fotter1stBox">
    <h3 className="communityheader" style={{marginBottom:"10px"}}>Community</h3>
    <p className="Footer_paragraph">Tutorials</p>
    <p className="Footer_paragraph">Documentation</p>

    <p className="Footer_paragraph"> Forum</p>
    <br></br>
       <h3 className="openSourceheader" style={{marginBottom:"10px"}}>Open Source</h3>
       <p className="Footer_paragraph">Download</p>
       <p className="Footer_paragraph">Github</p> 
       <p className="Footer_paragraph">Runbot</p>
       <p className="Footer_paragraph">Translations</p>

  </div>
  <div className="fotter2ndBox">
      <h3 className="servicesHeader" style={{marginBottom:"10px"}}>Services</h3>
      <p className="Footer_paragraph">Odoo.sh Hosting</p>
      <p className="Footer_paragraph">Support</p>
      <p className="Footer_paragraph">Upgrade</p>
      <p className="Footer_paragraph">Education</p>
      <br></br>
      <h3 style={{marginBottom:"10px"}}>Find an Accountant</h3>
      <p className="Footer_paragraph">Find a Partner</p>
      <p className="Footer_paragraph">Become a Partner</p>

  </div>

  <div className="fotter3rdBox">
   <h3 style={{marginBottom:"10px"}}>About Us</h3>
   <p className="Footer_paragraph">Our company</p>
   <p className="Footer_paragraph">Contact us</p>
   <p className="Footer_paragraph">Jobs</p>
   <p className="Footer_paragraph">Events</p>
   <p className="Footer_paragraph">Podcast</p>
   <p className="Footer_paragraph">Blog</p>
   <p className="Footer_paragraph">Customers</p>
   <p className="Footer_paragraph">Legal . Privacy</p>
   <p className="Footer_paragraph">Security</p>
   
  </div>














  
  </div>

  <div className="FooterContentRight">
  <div className="languageselectorBox">

  <select className="selectLanguage" style={{textDecoration:"none",outline:"none",border:"none",color:"white",backgroundColor:"rgb(30, 37, 44)"}}>
  <img src="br.png"alt="br" className="optionsImg"></img>

  <option><img src="f.png"alt="usa" className="optionsImg"></img>English</option>
  <option> <img src="ua.png"alt="ua" className="optionsImg"></img>ykpaiHCbKa</option>
  <option><img src="tr.png"alt="tr" className="optionsImg"></img>Turkce</option>
  <option>  <img src="ua.png"alt="ua" className="optionsImg"></img>Portugues(BR)</option>
  <option><img src="fr.png"alt="fr" className="optionsImg"></img>Francais</option>
  <option><img src="es.png"alt="usa" className="optionsImg"></img>Espanol</option>
  <option><img src="it.png"alt="usa" className="optionsImg"></img>Italiano</option>
  </select>
  </div>
  
   <hr  className="Footer_paragraph"/>
   <br></br>
   <div >
   <p  className="Footer_paragraph">Odoo is a suite of open source business apps that cover all your comapny needs : CRM ,eCommerce ,accounting ,inventory ,point of sale ,project management ,etc. </p>
  <br></br>
   <p  className="Footer_paragraph"> Odoo's unique value proposition is to be at the same time very easy to use and fully integrated .</p>
   </div>
   <br></br>
   <div className="FooterIconsContainer">
  
 
  <a href="https:/facebook.com" className="fbLink"><FacebookIcon className="facebook icons__"/></a>
  <a href="https:/twitter.com" className="fbLink"><TwitterIcon className="twitter icons__"/></a>
  <a href="https:/instagram.com" className="fbLink"><InstagramIcon className="Instagram icons__"/> </a>
  <a href="https:/youtube.com" className="fbLink"><YouTubeIcon className="youtube icons__"/></a>
  <a href="https:/github.com" className="fbLink"><GitHubIcon className="github icons__"/></a>
  <a href="https:/linkedin.com" className="fbLink"><LinkedinIcon className="Linkdin icons__"/></a>
  <a href="https:/gana.com" className="fbLink"><MusicNoteIcon className="musicIcon icons__"/></a>
  <a href="https:/gmail.com" className="fbLink"><EmailIcon className="emailBox icons__"/></a>
   </div>
    
   </div>
  </div>
    </div>
 )
}
export default Footer;