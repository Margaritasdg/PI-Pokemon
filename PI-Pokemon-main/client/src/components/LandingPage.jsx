import React from 'react';
import{ Link} from "react-router-dom";
import './LandingPage.css'




export default function LandingPage(){
    return(
    <div className="lp">
       <img src="fondo"  alt=""   />
            <h3 className='title_landing'>Encuentra tu Pokemon!!</h3>
        <div>
            </div>
        <Link to = '/home'>
            <button className='button'>INGRESAR</button>
        </Link>
    
    </div>
)

}
    
