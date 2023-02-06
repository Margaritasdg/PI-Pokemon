import React from 'react';
import{ Link} from "react-router-dom";
import './Landing.css'




const Landing=()=>{
    return(
    <div className="lp">
       <img  src= "fondo"  alt=""   />
            <h3 className='title_landing'>Encuentra tu Pokemon!!</h3>
        <div>
            </div>
        <Link to = '/home'>
            <button className='button'>INGRESAR</button>
        </Link>
    
    </div>
)

}
export default Landing;
