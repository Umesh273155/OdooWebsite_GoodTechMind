
import "./Style/TryItFreePage.css";
import Footer from './Footer'
const tryItFreePage=()=>{
    return(
        <div className="tryItFreePageContainer"style={{ marginTop:"0",paddingTop:"0"}}>
       
         <div className="tryItFreePageHeaderBox" style={{marginTop:"0",paddingTop:"0"}}>
           <h1 classname="chooseappHeader" style={{marginBottom:'0', textShadow:"0 2px 3px rgb(89, 255, 47)"}}>Choose Your Apps</h1>
           <h3 className="freeInstantAccessText"style={{marginTop:"10px"}}>Free instant access ,no credit card required </h3>
         </div>

           <div className="addedAppAndInstantAccessBox">
         <div className="tryInstatAccessIconsandAddCartBox">
          
          <div>
         <h3 style={{marginLeft:"2rem",marginBottom:"15px",marginTop:"30px"}}>WEBSITE</h3>
        
          <div className="tryInstatAccessIconsBox" style={{marginLeft:"4%"}}>
         
           <div className="radioBox b_o_x"> <img src="websitebuilder.svg"alt="websitebuilder" className="iconstryfreePage"></img><span className="content_">Website</span><input type="radio"></input></div>
           <div  className="radioBox b_o_x"> <img src="ecommerce.svg"alt="websitebuilder"className="iconstryfreePage" ></img><span className="content_">eCommerce</span><input type="radio"></input></div>
           <div  className="radioBox b_o_x"> <img src="elearning.png"alt="websitebuilder"className="iconstryfreePage"></img><span className="content_">eLearning</span><input type="radio"></input></div>
           <div  className="radioBox b_o_x"> <img src="livechat.png"alt="websitebuilder"className="iconstryfreePage"></img><span className="content_">Live Chat</span><input type="radio"></input></div>
          
          </div>
          <h3  style={{marginLeft:"2rem",marginBottom:"15px",marginTop:"30px"}}>SALES</h3>
          <div className="tryInstatAccessIconsBox" style={{marginLeft:"4%"}}>
       
        <div  className="radioBox b_o_x"> <img src="CRM.svg"alt="websitebuilder" className="iconstryfreePage"></img><span className="content_">CRM</span><input type="radio"></input></div>
        <div  className="radioBox b_o_x"> <img src="Sales.svg"alt="websitebuilder" className="iconstryfreePage"></img><span className="content_">Sales</span><input type="radio"></input></div>
        <div  className="radioBox b_o_x"> <img src="invoicing.png"alt="websitebuilder" className="iconstryfreePage"></img><span className="content_">Invoicing</span><input type="radio"></input></div>
        <div  className="radioBox b_o_x"> <img src="pontOfsale.png"alt="websitebuilder"className="iconstryfreePage"></img><span className="content_">Point of Sale</span><input type="radio"></input></div>
       </div>
      
       <div className="tryInstatAccessIconsBox" style={{marginLeft:"4%"}}>
         <div  className="radioBox b_o_x"> <img src="sign.svg"alt="websitebuilder" className="iconstryfreePage"></img><span className="content_">Sign</span><input type="radio"></input></div>
         <div  className="radioBox b_o_x"> <img src="subscription.png"alt="websitebuilder" className="iconstryfreePage"></img><span className="content_">Subscriptions</span><input type="radio"></input></div>
         <div  className="radioBox b_o_x"> <img src="rental.png"alt="websitebuilder" className="iconstryfreePage"></img><span className="content_">Rental</span><input type="radio"></input></div>
         <div  className="radioBox b_o_x"> <img src="fieldservices.png"alt="websitebuilder" className="iconstryfreePage"></img><span className="content_">Field Service</span><input type="radio"></input></div>
        </div>
         
         
          
          </div>
          <h3  style={{marginLeft:"2rem",marginBottom:"15px",marginTop:"30px"}}>OPERATIONS</h3>
          <div className="tryInstatAccessIconsBox" style={{marginLeft:"4%"}}>
       
        <div  className="radioBox b_o_x"> <img src="accounting.svg"alt="websitebuilder" className="iconstryfreePage"></img><span className="content_">Accounting</span><input type="radio"></input></div>
        <div  className="radioBox b_o_x"> <img src="knowledge.png"alt="websitebuilder" className="iconstryfreePage"></img><span className="content_">Knowledge</span><input type="radio"></input></div>
      <div  className="radioBox b_o_x"> <img src="Project.svg"alt="websitebuilder" className="iconstryfreePage"></img><span className="content_">Project</span><input type="radio"></input></div>
        <div  className="radioBox b_o_x"> <img src="Timesheet.svg"alt="websitebuilder"className="iconstryfreePage"></img><span className="content_">Timesheets</span><input type="radio"></input></div>
       </div>
      
       <div className="tryInstatAccessIconsBox" style={{marginLeft:"4%"}}>
         <div  className="radioBox b_o_x"> <img src="helpdesk.svg"alt="websitebuilder" className="iconstryfreePage"></img><span className="content_">Helpdesk</span><input type="radio"></input></div>
         <div  className="radioBox b_o_x"> <img src="invountry.svg"alt="websitebuilder" className="iconstryfreePage"></img><span className="content_">Inventory</span><input type="radio"></input></div>
         <div  className="radioBox b_o_x"> <img src="purchase.svg"alt="websitebuilder" className="iconstryfreePage"></img><span className="content_">Purchase</span><input type="radio"></input></div>
         <div  className="radioBox b_o_x"> <img src="document.png"alt="websitebuilder" className="iconstryfreePage"></img><span className="content_">Documents</span><input type="radio"></input></div>
        </div>
        <h3  style={{marginLeft:"2rem",marginBottom:"15px",marginTop:"30px"}}>MARKETING</h3>
        <div className="tryInstatAccessIconsBox" style={{marginLeft:"4%"}}>
        <div  className="radioBox b_o_x"> <img src="market.png"alt="websitebuilder" className="iconstryfreePage"></img><span className="content_">Email Market.</span><input type="radio"></input></div>
        <div  className="radioBox b_o_x"> <img src="sms.png"alt="websitebuilder" className="iconstryfreePage"></img><span className="content_">SMS Market..</span><input type="radio"></input></div>
        <div  className="radioBox b_o_x"> <img src="market.png"alt="websitebuilder" className="iconstryfreePage"></img><span className="content_">Market Aut..</span><input type="radio"></input></div>
        <div  className="radioBox b_o_x"> <img src="events.png"alt="websitebuilder"className="iconstryfreePage"></img><span className="content_">Events</span><input type="radio"></input></div>
       </div>
       <div className="tryInstatAccessIconsBox_">
       <div  className="radioBox b_o_x"> <img src="survey.png"alt="websitebuilder" className="iconstryfreePage"></img><span className="content_">Survey</span><input type="radio"></input></div>
       <div  className="radioBox b_o_x"> <img src="like.png"alt="websitebuilder" className="iconstryfreePage"></img><span className="content_">Social Marketi..</span><input type="radio"></input></div>
       <div  className="radioBox b_o_x"> <img src="appointment.png"alt="websitebuilder" className="iconstryfreePage"></img><span className="content_">Appointments</span><input type="radio"></input></div>
     
      </div>

      <h3  style={{marginLeft:"2rem",marginBottom:"15px",marginTop:"30px"}}>HUMAN RESOURCES</h3>
      <div className="tryInstatAccessIconsBox"style={{marginLeft:"4%"}}>
      <div  className="radioBox b_o_x"> <img src="emp.png"alt="websitebuilder" className="iconstryfreePage"></img><span className="content_">Employees</span><input type="radio"></input></div>
      <div  className="radioBox b_o_x"> <img src="recruitment.png"alt="websitebuilder" className="iconstryfreePage"></img><span className="content_">Recuitment</span><input type="radio"></input></div>
      <div  className="radioBox b_o_x"> <img src="websitebuilder.svg"alt="websitebuilder" className="iconstryfreePage"></img><span className="content_">Employee Ref..</span><input type="radio"></input></div>
      <div  className="radioBox b_o_x"> <img src="timeoff.png"alt="websitebuilder" className="iconstryfreePage"></img><span className="content_">Time Off</span><input type="radio"></input></div>
     </div>
     <div className="tryInstatAccessIconsBox"style={{marginLeft:"4%"}}>
     <div  className="radioBox b_o_x"> <img src="expense.png"alt="websitebuilder" className="iconstryfreePage"></img><span className="content_">Expenses</span><input type="radio"></input></div>
     <div  className="radioBox b_o_x"> <img src="planing.png"alt="websitebuilder" className="iconstryfreePage"></img><span className="content_">Planning</span><input type="radio"></input></div>
     <div  className="radioBox b_o_x"> <img src="appraisal.png"alt="websitebuilder" className="iconstryfreePage"></img><span className="content_">Appraisals</span><input type="radio"></input></div>
     <div  className="radioBox b_o_x"> <img src="fleet.png"alt="websitebuilder" className="iconstryfreePage"></img><span className="content_">Fleet</span><input type="radio"></input></div>
   
    </div>
    <div className="tryInstatAccessIconsBox__">
    <div  className="radioBox b_o_x"> <img src="appr.png"alt="websitebuilder" className="iconstryfreePage"></img><span className="content_">Approvals</span><input type="radio"></input></div>
    <div  className="radioBox b_o_x"> <img src="Lunch.png"alt="websitebuilder" className="iconstryfreePage"></img><span className="content_">Lunch</span><input type="radio"></input></div>

</div>
<h3  style={{marginLeft:"2rem",marginBottom:"15px",marginTop:"30px"}}>CUSTOMIZATION</h3>
<div className="tryInstatAccessIconsBox_CUSTOMIZATION">
<div  className="radioBox b_o_x"> <img src="studio.svg"alt="websitebuilder" className="iconstryfreePage"></img><span className="content_">Studio</span><input type="radio"></input></div>
       </div>
</div>




  <div className="AddedappBox">

  <div className="innerBoxADDEDAPP">
   <h4  style={{ color:"grey"}}><span style={{color:"purple"}}> 0</span> App Selected</h4>
   <ul>
   <li></li>
   </ul>
   <div className="freeAndUnlimitedUserBox">
   <p><b>Free</b>, with <b> unlimited</b> users</p>
   <p><b>forever</b></p>
   </div>
   <button className="continue">Continue &gt;</button>
  </div>
  </div>
     </div>
     <Footer style={{marginTop:"50px"}}/>
     </div>
     
        
    )
}
export default tryItFreePage;