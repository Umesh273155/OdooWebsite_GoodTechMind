import "./Style/SignInPage.css";
import {Link} from "react-router-dom";
const SignInPage=()=>{
    return(
        <div className="signUpPageContainer">
          <div className="signUpChildBox">
          <div className="odooheaderandParaBox">
            <h1  style={{color:"rgb(77, 76, 76)",marginBottom:"2rem",textShadow:"0 2px 5px rgb(3, 3, 3)"}}><span  style={{marginBottom:"0",color:"orange"}}>O</span>doo</h1> 
           
            <div className="signupPara">
            <p style={{marginBottom:"2px"}}>Access and manage your instances </p>
            <p  style={{marginTop:"2px"}}>  from this Odoo account.</p>
            </div>
           
            <div className="inputFieldBox">
            <b style={{color:"grey"}}>Email</b>
            <br></br>
            <input type="text" className="email"placeholder="Email"></input>
            <br></br>
            <br></br>
            <b style={{color:"grey"}}>Password</b>
            <br></br>
            <input type="password" className="password"placeholder="Password"></input>
             <br></br>
             <br></br>
               <button className="signin__">SIGN IN</button>
               <div className="donthaveaccountAndResetPasswordBox">
               <Link to="/signup" style={{textDecoration:"none"}}>
               <p className="donthaveaccount">Don't have an account? &nbsp;</p> 
               </Link>
              

               <p style={{color:"#017e84"}} className="resetpassword">Reset Password</p>
               </div>
               </div>
            </div>    
          </div>
        </div>
    )
}
export default SignInPage;