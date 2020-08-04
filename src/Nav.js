import React ,{ useState,useEffect }from 'react'
import "./Nav.css";


function Nav() {
    const [show,handleShow] = useState([])

    useEffect(()=>{

     window.addEventListener("scroll",()=>{
         if(window.scrollY>400){
              handleShow(true);
         }
         else{
             handleShow(false);
         }
     });
     return ()=>{
         window.removeEventListener("scroll");
     }
    },[])
    return (
        <div className={`nav ${show && "nav_black"}`}>
          
                 <img
            className="nav_avatar"
              src="https://en.wikimedia.org/wikipedia/common/0/0"
            ></img>
            
        </div>
    )
}

export default Nav
