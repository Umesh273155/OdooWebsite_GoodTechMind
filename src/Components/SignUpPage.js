import "./Style/SignUpPage.css";
import {useState} from 'react';
import axios from 'axios';
const SignUpPage=()=>{
  const[name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
     const handleSignUp= async (e)=>{
      console.log(name,email,password);
            e.preventDefault();
            try{
              const response=await axios.post("/api/user/resister",{
                      userName:name,
                      email,
                      password,

              })
              .then(({data})=> dispatchEvent(setUser(data.user)))
              .catch((error)=>console.log(error));
              setName("");
              setEmail("");
              setPassword("");
              console.log(response);
            }catch(error){
              console.log(error);
            }
     };
    return(
<div className="signUpPageContainer">


<div className="signupParentBox">
<h1 className="Odoo" style={{textAlign:"center"}}><span  style={{color:"orange"}}>O</span>doo</h1>
<hr/>
<form onSubmit={handleSignUp}> 
  <div className="SignUpPageInnerBox">
 
   
 
 <h3 style={{color:"grey"}} className="personalinfo">Personal Info</h3>
 <div className="firstNameAndLastName">
 User Name 
 <br></br>
 <input type="text"placeholder="user name" className="inputdata" onClick={(e)=>setName(e.target.value)}></input>
<br></br>
 
 Email
 <br></br>
 <input type="email"placeholder="abcd@gmail.com" className="inputdata" onClick={(e)=>setEmail(e.target.value)}></input>
<br></br>
Phone Number 

<br></br>

<input type="password"placeholder="xxxxx" className="inputdata" onClick={(e)=>setPassword(e.target.value)}></input>
<br></br>

<button className="signup" type="submit">Submit</button>

</div>

 </div>
 </form>
  </div>
  </div>

    )
}
export default SignUpPage;