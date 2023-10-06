import "./Style/MeetAnExpert.css"
import {Forward} from '@material-ui/icons';
import {Place} from "@material-ui/icons";
import {Watch} from "@material-ui/icons";
import Footer from './Footer';
const MeetAnExpert=()=>{
    return (
        <div className="MeetAnExpertPageMainContainer">
        <div className="meetanExpertHeaderBox">
        <div style={{display:"flex",alignItems:"center"}}>
        <h3  style={{color:"grey"}}>All Appointments</h3>
        <Forward style={{color:"#089097"}}/>
        </div>
         <div>
         <img src="TIME.png"alt=""className="headerImg"></img>
         <img src="DETAILS.png"alt=""className="headerImg"></img>
         <img src="bOOKED.png"alt=""className="headerImg"></img>
         </div>
        
       
        
        </div>
      
        
        <div style={{display:"flex"}}>
        <div className="MeetExpertInnerBox">
        <h1 style={{color:'#089097'}}>I want a demo with an Odoo expert – DS</h1>
        <br></br>
        <br></br>
        <p>Schedule a 1-hour free meeting with an expert, to get:</p>
        <ul style={{marginLeft:"20px"}}>
        
        <li>a tailored demonstration</li>
        <li>recommendations based on your needs</li>
        <li>answers to your questions about Odoo</li>
        <li>information about pricing & methodology</li>
        </ul>
        <p style={{textAlign:"center",color:"grey",marginTop:"30px"}}><b>JUNE 2023</b></p>
        <br></br>
        <div className="tableBox">
        <div style={{backgroundColor:"white",textAlign:"center"}}><b>SUN</b></div>
        <div style={{backgroundColor:"white",textAlign:"center"}}><b>MON</b></div>
        <div style={{backgroundColor:"white",textAlign:"center"}}><b>TUE</b></div>
        <div style={{backgroundColor:"white",textAlign:"center"}}><b>WED</b></div>
        <div style={{backgroundColor:"white",textAlign:"center"}}><b>THU</b></div>
        <div style={{backgroundColor:"white",textAlign:"center"}}><b>FRI</b></div>
        <div style={{backgroundColor:"white",textAlign:"center"}}><b>SAT</b></div>
          <div style={{backgroundColor:"white",textAlign:"center"}}>1</div>
          <div  style={{backgroundColor:"white",textAlign:"center"}}>2</div>
          <div  style={{backgroundColor:"white",textAlign:"center"}}>3</div>
          <div  style={{backgroundColor:"white",textAlign:"center"}}>4</div>
          <div  style={{backgroundColor:"white",textAlign:"center"}}>5</div>
          <div  style={{backgroundColor:"white",textAlign:"center"}}>6</div>
          <div  style={{backgroundColor:"white",textAlign:"center"}}>7</div>
          <div  style={{backgroundColor:"white",textAlign:"center"}}>8</div>
          <div  style={{backgroundColor:"white",textAlign:"center"}}>9</div>
          <div  style={{backgroundColor:"white",textAlign:"center"}}>10</div>
          <div  style={{backgroundColor:"white",textAlign:"center"}}>11</div>
          <div  style={{backgroundColor:"white",textAlign:"center"}} className="fixedDate">12</div>
          <div  style={{backgroundColor:"white",textAlign:"center"}} className="fixedDate">13</div>
          <div  style={{backgroundColor:"white",textAlign:"center"}} className="fixedDate">14</div>
          <div  style={{backgroundColor:"white",textAlign:"center"}} className="fixedDate">15</div>
          <div  style={{backgroundColor:"white",textAlign:"center"}} className="fixedDate">16</div>
          <div  style={{backgroundColor:"white",textAlign:"center"}} className="fixedDate">17</div>
          <div  style={{backgroundColor:"white",textAlign:"center"}} className="fixedDate">18</div>
          <div  style={{backgroundColor:"white",textAlign:"center"}} className="fixedDate">19</div>
          <div  style={{backgroundColor:"white",textAlign:"center"}} className="fixedDate">20</div>
          <div  style={{backgroundColor:"white",textAlign:"center"}} className="fixedDate">21</div>
          <div  style={{backgroundColor:"white",textAlign:"center"}} className="fixedDate">22</div>
          <div  style={{backgroundColor:"white",textAlign:"center"}} className="fixedDate">23</div>
          <div  style={{backgroundColor:"white",textAlign:"center"}}>24</div>
          <div  style={{backgroundColor:"white",textAlign:"center"}}>25</div>
          <div  style={{backgroundColor:"white",textAlign:"center"}}>26</div>
          <div  style={{backgroundColor:"white",textAlign:"center"}}>27</div>
          <div  style={{backgroundColor:"white",textAlign:"center"}}>28</div>
          <div  style={{backgroundColor:"white",textAlign:"center"}}>29</div>
          <div  style={{backgroundColor:"white",textAlign:"center"}}>30</div>
          <div  style={{backgroundColor:"white",textAlign:"center"}}>31</div>
          <div  style={{backgroundColor:"white",textAlign:"center"}}></div>
          <div  style={{backgroundColor:"white",textAlign:"center"}}></div>
          <div  style={{backgroundColor:"white",textAlign:"center"}}></div>
          <div  style={{backgroundColor:"white",textAlign:"center"}}></div>

        </div>
        <br>
        </br>
        <br></br>
       
        </div>
          <div className="rightBoxMeetExpert">
          <div style={{display:"flex"}}>

          <Place style={{marginRight:"20px",color:"yellowgreen"}}/>
          <p>Online</p>
          </div>
          <div style={{display:"flex"}}>

          <Watch style={{marginRight:"20px",marginTop:"20px",color:"#089097"}}/>
          <p style={{marginTop:"20px"}}> 1 hour</p>
          </div>
          <p style={{color:"grey",marginTop:"100px"}}><b>TimeZone:</b></p>
          <select>
          <option>Select TimeZone</option>
          <option>Africa/Abidjan</option>
          <option>Africa/Accra</option>
          <option>Indian/Comooro</option>
          <option>HongKong</option>
          <option>Iran</option>
          <option>Japan</option>
          <option>Libya</option>
          <option>Asia/Tokyo</option>
          <option>Asia/Tehran</option>
          <option>America?Bhaia</option>
          </select>
          </div>
          </div>
          <Footer style={{marginTop:"50px"}}/>
        </div>
    )
}
export default MeetAnExpert;