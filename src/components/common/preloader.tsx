import clock from "../../images/clock.gif";
import React from "react";

type PropsType = {
}
const Preloader: React.FC =(props) =>{
    return (
        <div>
            <img src={clock} alt={'preloader'}/>
        </div>
    )
}
export default Preloader