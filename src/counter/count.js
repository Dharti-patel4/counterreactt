import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Count()
{
    const [ count,setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
      }function decriment() {
        setCount(count - 1);
      }
      function reset() {
        setCount(0);
      }

    return(
 <div style={{margin : "10% auto", height : "500px", width : "500px", top: "center", textAlign:"center",backgroundColor:"black", position:"relative"}}>
     <div style={{backgroundColor:"rebeccapurple", height:"300px", width:"300px", textAlign:"center",top:"20%",left:"20%", position:"absolute"}}>
     <h1 style={{fontStyle:"italic",color:"whitesmoke"}} >Counter</h1>
     <h2  style={{fontFamily:"sans-serif", fontStyle:"italic", fontSize:"38px",color:"whitesmoke"} } >{count}</h2>
        <div><Button variant="success" onClick={decriment} style={{paddingleft :" 5% ", height:"40px", width:"30px", fontWeight:"bold"}}>-</Button>
        <Button variant="success" onClick={reset} style={{paddingleft :" 5%" ,height:"40px"  ,width:"60px", fontWeight:"bold"}}>Reset</Button>
        <Button variant="success" onClick={handleClick} style={{paddingleft :" 5%", height:"40px" , width:"30px",fontWeight:"bold"}}>+</Button></div>
     </div>
 </div>
    )
      
}
export default Count;