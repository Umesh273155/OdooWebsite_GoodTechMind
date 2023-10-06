import './Style/ChatPage.css';
const ChatPage=()=>{
    return(
         <div className="bgChatImgae">
        
        <div className="chat_Page_Container">
       <div className="headBox">
       <div  style={{display:"flex",justifyContent:"space-around",alignItems:"center",paddingTop:"3%"}}>
       <p style={{fontWeight:"600"}}>Website Visitor <span className="websiteUserIdName">#255161790 Alex [EN]</span></p>
       <h4 className="x">X</h4>
       </div>
      <div style={{display:"flex"}}>
      <img src="marcpeeter.jpg"alt="#"className="websitevisitor"></img>
      <h3 style={{marginTop:"12%",color:"black"}}>Alex [EN]</h3><p style={{color:'grey',marginTop:"12%"}}>.now</p>
      </div>
      <div className="howcaniHelpBox">
      <p style={{marginLeft:"10px"}}>Hello! How Can I help you?</p>
      </div>
      
 <hr/>

 <textarea placeholder='type here..'rows='15'cols='38' className="textarea"></textarea>
       </div>
       </div>
       </div>
       
    )
}
export default ChatPage;