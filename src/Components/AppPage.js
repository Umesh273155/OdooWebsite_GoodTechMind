import './Style/AppPage.css';
import Footer from './Footer';
function AppPage(){
    return (
 <div className="appPageMainContainer">
 <div className="appPageInnerContainer">
 <div  className="appPageChildContainer1">
 
 <div className="financeBox">
  <h4 style={{color:"rgb(67, 67, 103)"}}>FINANCE</h4>
  <hr style={{marginBottom:"7px",marginTop:"7px"}}></hr>
  <p className="app_para_">Accounting</p>
  <p  className="app_para_">Invoicing</p>
  <p  className="app_para_">Expenses</p>
  <p className="app_para_">Spreadsheet</p>
  <p className="app_para_">Documents</p>
  <p className="app_para_">Sign</p>
 </div>
 <div className="salesBox">
 <div style={{borderBottom:"1px solid orange",marginBottom:"7px",paddingBottom:"7px"}}>
 <h4 style={{color:"orange"}}>SALES</h4>
 </div>
 <p className="app_para_">CRM</p>
 <p className="app_para_">Point of Sale</p>
 <p className="app_para_">Subscriptions</p>

 <p className="app_para_">Rental</p>
 <p className="app_para_">Amazon Connector</p>
 </div>
 <div className="websiteBox">
<h4 style={{color:"rgb(67, 67, 103)"}}>WEBSITE</h4>
<hr style={{marginBottom:"7px",marginTop:"7px"}}/>
<p className="app_para_">Website Builder</p>

<p className="app_para_"> eCommerce</p>
<p className="app_para_">Blogs</p>
<p className="app_para_">Forum</p>
<p className="app_para_">Live Chat</p>
<p className="app_para_">eLearning</p>
 </div>
 <div className="inventoryBox">
  <h4 style={{color:"rgb(67, 67, 103)"}}>INVENTORY & MRP</h4>
<hr style={{marginBottom:"7px",marginTop:"7px"}}/>
  <p className="app_para_"> Inventory</p>
  <p className="app_para_">Manufacturing</p>
  <p className="app_para_">PLM</p>
  <p className="app_para_">Purchase</p>
  <p className="app_para_">Maintenance</p>
  <p className="app_para_">Quality</p>

 </div>
 </div>



 <div  className="appPageChildContainer1">
 <div className="humanresourcesBox">
 <h4> HUMAN RESOURCES</h4>
 <hr style={{marginBottom:"7px",marginTop:"7px"}}/>
 <p className="app_para_">Employment</p>
 <p className="app_para_">Recruitment</p>
 <p className="app_para_">Time off</p>
 <p className="app_para_">Appraisals</p>
 <p className="app_para_">Referrals</p>
 <p className="app_para_">Fleet</p>
 </div>
    <div className="marketingBox">
  
   <div style={{borderBottom:"1px solid orange",marginBottom:"7px",paddingBottom:"7px"}} >
   <h4 style={{color:"orange"}}>MARKETING </h4>
  
   </div>



<p className="app_para_">Social Marketing </p>
<p className="app_para_">Email Marketing</p>
<p className="app_para_">SMS Marketing</p>
<p className="app_para_">Events</p>
<p className="app_para_">Marketing Automation</p>
 <p className="app_para_"> Surveys</p>
  
    </div>
    <div className="services">
    <div style={{borderBottom:"1px solid orange",marginBottom:"7px",paddingBottom:"7px"}} >
    <h4 style={{color:"orange"}}>SERVICES</h4>
   
    </div>
   
    <p className="app_para_">Project</p>
    <p className="app_para_">Timesheeet </p>
    <p className="app_para_">Field Services</p>
    <p className="app_para_">Helpdesk</p>
    <p className="app_para_">Planning</p>
    <p className="app_para_">Appointments</p>

    </div>
    <div className="producttivity">
    <h4>PRODUCTIVITY</h4>
    <hr style={{marginBottom:"7px",marginTop:"7px"}}/>
    <p className="app_para_">Discuss</p>
    <p className="app_para_">Approvals</p>
    <p className="app_para_">IoT</p>
    <p className="app_para_">VoIP</p>
    <p className="app_para_">Knowledge <span className="newbtn">New!</span></p>
    </div>

 </div>
 <hr style={{marginTop:"20px",marginBottom:"20px"}}/>
 <div className="apppagefooterIcons">
<div className="thirdpartyappiconsandParaBox"style={{display:"flex",marginRight:"2rem"}}>
<img src="thirdpartyappicons.png"alt="thirdpartyappicons" className="pen"></img>
<p className="app_para_">Third Party Apps</p>
</div>
<div className="penappIconsBox" style={{display:"flex",marginRight:"2rem"}}>
<img src="pen.png"alt="pen" className="pen"></img>
<p className="app_para_">Odoo Studio</p>
</div>
<div className="odocloudplateformBox"style={{display:"flex" ,}}>
<img src="odocloudplateform.png"alt="odocloudplateform" className="pen"></img>
<p className="app_para_">Knowledge</p>
</div>

 </div>
 
 
 </div>
 <br></br>
 <Footer style={{marginTop:"50px"}}/>
 </div>
    )
}
export default AppPage;