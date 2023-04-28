import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './bot.css'

function BotCollection(){
    //  creating State variables
    const [bots, setBots] = useState([]);

    // fetching data using UseEffect from the API
  useEffect(() => {
    fetch(" http://localhost:8001/bots")
      .then((res) => res.json())
      .then((bots) => setBots(bots));

  }, []);
    return(
        <div>
        <div className='item-container'>
            {bots.map((bot) =>(
                    <div key={bot.id}>
                    <div className='card'>
                    
                        <h3>Name: {bot.name}</h3>
                        <img src ={bot.avatar_url} alt=''/>
                        <p>Health: {bot.health}</p>
                        <p>Image: {bot.damage}</p>
                        <p>Armor: {bot.armor}</p>
                        <p>Class: {bot.bot_class}</p>
                        {/* <p>Catchphrase: {bot.catchphrase}</p> */}
                        <p>D.O.C: {bot.created_at}</p>
                        <p>D.O.U: {bot.updated_at}</p>
                        
                        
                    </div> 
                      
                        

                    </div>
                )
            )

            }
    
        </div>
        </div>
    )
}

export default BotCollection;