import React from "react";
import { useState } from "react";
import BotCollection from "./BotCollection";

function YourBotArmy(){
    const [isbot,setIsBot] = useState(false)


    return(
        <div className="armydisplay">
            <button onClick={()=>setIsBot}>click</button>
         {isbot && <BotCollection />}
              
        </div>

    )
}
 
export default YourBotArmy;