import "./Style/ChatBox.css";

import { Facebook, Place } from "@material-ui/icons";
import { Pageview } from "@material-ui/icons";
import { Folder } from "@material-ui/icons";
import { Forward } from "@material-ui/icons";
 import {DateRange} from "@material-ui/icons";
 import {Email} from "@material-ui/icons";
 import {Twitter} from "@material-ui/icons";
 import {WhatsApp} from "@material-ui/icons";
 import {LinkedIn} from "@material-ui/icons";
const ChatBox = () => {
  return (
    <div className="chatBoxMainContainer">
      <div className="chatBoxinnerContainer">
        <div className="chatBoxheader">
          <h3 className="alleventsText">All Events</h3>
          <Forward className="arrow" />
          <Folder className="resisterIcons" id="folder" />
          <h5 className="roadshow">Roadshow</h5>
          <Place className="resisterIcons" />
          <h5 className="india">India</h5>

          <input type="text" placeholder="Search an event.." className="inputResister" style={{ marginTop: "14px" }}></input>
          <Pageview style={{ width: "50px", height: "60px", marginTop: "0" }} className="preview" />
        </div>
    <div className="backgroundImageChatBox">  
    
    <div className="ChatBoxContent">
        
    <h1 className="onfrontBackgroundText">Odoo 16 Roadshow - Kochi</h1>
    <h1 className="onfrontBackgroundText">(India)</h1>
    </div>
    <div className="odooRoadShowBox">
     <div>
          <p>Odoo Roadshow-Kochi,</p>
          <p style={{textAlign:"center"}}>India</p>
     </div>
     <p><b>FREE</b></p>
     <div>
     <p>Sales end on 06/23/23, 10:30 AM</p>
     <p style={{textAlign:"center"}}>(Asia/Kolkata)</p>
     </div>
     <div  style={{display:"flex",width:"6%",justifyContent:"space-between"}}>
     <p><b>Qty</b></p>
     <select style={{height:"28px",marginTop:"5px"}}>
     <option>1</option>
     <option>2</option>
     <option>3</option>
     <option>4</option>
     <option>5</option>
     <option>6</option>
     </select>
     </div>
     <button className="resisterationbtn">Register</button>
    
    </div>
    </div>
       <div  style={{display:"flex"}}>
    <div className="contentMainbox" style={{display:"flex"}}>
    <div className="contentLeftBox">
     <div className="im_age">
     <img src="Screenshot 2023-06-08 180916.png"alt=""className="Imag2">
     </img>
     </div>
     <div className="odooIsComingToKochParaBox" style={{backgroundColor:"#f8f9fa",paddingLeft:"10px",paddingRight:"10px"}}>
       <h1 style={{color:"purple",marginTop:"15px",marginBottom:"10px"}}>Odoo is coming to Koch!</h1>
      <p>Get an overview of Odoo 16, view the latest features of Odoo 16 on live demos, and network with local startups and industrial professionals. Odoo Roadshow will reveal how our all-in-one business management solution can make optimum use of you business resources.</p>
     <br></br>
      <p>This event brings together business owners, team leaders, IT professionals, and service providers from all over, to stay connected to a community dedicated to learning more about business management solutions.</p>
      <br></br>
      <p>Seize this exclusive opportunity to discover why over 7 million users worldwide grow their business with Odoo!.</p>
      </div>
      <br></br>
      <br></br>
      <hr ></hr>
      <br></br>
      <div className="Location_">
        <div style={{display:"flex",justifyContent:"center"}}>
        <Place style={{color:"#089097"}}/><p style={{color:"purple"}}>Radisson Blu Hotel</p>

        </div>
        <div style={{ display:"flex",justifyContent:"center"}}>
         <DateRange style={{color:"#089097"}}/><p style={{color:"purple"}}> 23 June 2023 | 2:00 PM-6:00 PM</p>

        </div>
        <h1 className="whyattendText">Why should you attend?</h1>
           <div style={{display:"flex",justifyContent:"space-between"}}>
           <div className="interactiveDemo">
            <img src="interactive.png"alt="#"className="IntrectiveDemoImage"></img>
            <h2 style={{color:"grey"}}>Interactive Demo</h2>
            <p>Get an interactive overview about latest version of Odoo and its features</p>
           </div>
           <div className="interactiveDemo">
           <img src="discussion.png"alt="#"className="IntrectiveDemoImage"></img>

         <h2 style={{color:"grey"}}>Live Discussion with Odoo Clients</h2>
         <p>Get a chance to talk to Odoo existing clients about Odoo Experience, services and any of your other related queries. </p>
           </div>
           </div>

      </div>
                   <div style={{display:"flex",justifyContent:"space-between"}}>
                   <div className="interactiveDemo">
                   <img src="qandanswer.png"alt="#"className="IntrectiveDemoImage"></img>
                   <h2 style={{color:"grey"}}>Q&A Session with Odoo Experts</h2>
                   <p>Get your unanswered questions answered in Q&A Session by Odoo Odoo Business Advisor, Experts and Odoo Partners and Clients.</p>
                  </div>

                  <div className="interactiveDemo">
                  <img src="networking.png"alt="#"className="IntrectiveDemoImage"></img>
                  <h2 style={{color:"grey"}}>Networking Opportunities</h2>
                  <p>Grab an amazing opportunity to connect with your fellow attendees from various industries. </p>
                 </div>
                   </div>   
                   <div className="pastOdooRoadShowBox" style={{border:"none"}}>
                       <h1 style={{marginTop:"20px",color:"#089097",marginLeft:"2%" ,}}>Glimpse of Past Odoo Roadshow!</h1>   
                       
                      
                        
                    <video width="95%"height="400px" style={{marginLeft:"2%",marginTop:"20px"}}
                    poster="79858.JPG"
                    controls>
                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4" />
            </video>
                    
                     
                   </div>
   
   
                   </div>





                   
    
  </div>
  <div className="ChatBoxRightBox">
  <p style={{color:"black",marginBottom:"15px" ,fontWeight:"700"}}>DATE & TIME</p>
  <p style={{color:"black",}} >Friday June<b> 09,2023</b></p>
  <p style={{color:"black"}} ><b>2:00 PM to 6:00 PM </b>(Asia/Kolkata)</p>
  <div style={{display:"flex",marginTop:"15px"}}>
  <DateRange/> <p style={{color:"#089097",fontWeight:"500"}}>Add to Calender </p>
  </div>
  <br></br>
  
  <br></br>
    <div className="timingBox" >
     <div style={{display:"flex",marginBottom:"12px"}}>
     <img src="timing.png"alt="#"className="welcome"></img>

     <div>
      
     <h3 style={{color:"black",textShadow:"none"}}>Welcome</h3>
     <p >1:30 - 2:00 PM</p>
      </div>
      </div>


      <div style={{display:"flex",marginBottom:"12px"}}>
      <img src="present.png"alt="#"className="welcome"></img>
 
      <div>
       
      <h3 style={{color:"black",textShadow:"none"}}>Presentation</h3>
      <p>2:00 - 5:30 PM</p>
       </div>
       </div>
       <div style={{display:"flex",marginBottom:"12px"}}>
       <img src="cup.png"alt="#"className="welcome"></img>
  
       <div>
        
       <h3 style={{color:"black",textShadow:"none"}}>Networking</h3>
       <p>5:30 - 6:00 PM</p>
        </div>
        </div>
        <div className="img3Box">
        <img src="Screenshot 2023-06-09 000535.png"alt=""className="img3">
        </img>
        </div>
        <div className="areaLocationBox">
         <p STYLE={{COLOR:"grey"}}><b>LOCATION</b></p>
         <br></br>
         <p style={{color:"black"}}>E-SQUARE THE FERN</p>
         <br></br>
         <p style={{color:"black"}}>PUNE</p>
           <p>133 A, University Road,</p>
           <p>Ganeshkhind</p>
           <p>PUNE 411016</p>
           <p>Maharashtra MH</p>
           <p>India</p>
           <br></br>
           <br></br>
           <div  style={{display:"flex"}}>
           <Place style={{color:"green"}}/> <p style={{color:"#089097"}} id="getDirectionLink">Get the direction..</p>
           </div>
         <div className="mapImageBox">
         <img src="map.png"alt="#"className="img4"></img>
         </div>
         <br></br>
         <p style={{color:"grey"}}><b>ORGANIZER</b></p>
        
<p style={{fontSize:"20px"}}>Odoo IN Pvt Ltd</p>
          <br></br>
          <div style={{display:"flex"}}>
          <Email style={{color:"#089097"}}/><p>events@odoo.com</p>
          </div>
       <br></br>
       <br></br>
       <hr></hr>
       <br></br>
       <br>
       </br>
       <p style={{color:"grey"}}><b>SHARE</b></p>
       <br></br>
       <p>Find out what people see and say about<br></br> this event, and join the conversation.</p>
       <br></br>
       <br></br>
       <div style={{display:"flex"}}>
       <div className="icBox">
       <a href="https:/facebook.com" className="fbLink"> <Facebook className="sharingIcons fb"/></a>
       </div>
       <div className="icBox">
       <a href="https:/twitter.com"className="fbLink"> <Twitter className="sharingIcons tw"/></a>
       </div>
       <div className="icBox">
       <a href="https:/whatsapp.com"className="fbLink"> <WhatsApp className="sharingIcons wh"/></a>
       </div>
       <div className="icBox">
       <a href="https:/linkedin.com"className="fbLink"> <LinkedIn className="sharingIcons ln"/></a>
       </div>
       <div className="icBox">
       <a href="https:/gmail.com"className="fbLink"><Email className="sharingIcons em"/></a>
       </div>
       </div>
   
        </div>
          
      </div>
    
   
  </div>
  </div>
  </div>
  </div>
   
   
    
  
  
    
   
  );
};
export default ChatBox;
