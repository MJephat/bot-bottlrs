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

  // function for Delete from the API by id
  function handleDelete(id){
    alert(id)
    fetch(`http://localhost:8001/bots/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          // console.log("Are you sure you want to delete this bot");
          setBots(bots.filter((remove) => remove.id !== id));
        } else {
          throw new Error("Event couldn't be completed");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
    return(
        <div>
        <div className='item-container'>
            {bots.map((bot) =>(
            <button ocClick>
                    <div key={bot.id}>
                        <div className='card'>
                        
                            <h3>Name: {bot.name}</h3>
                            <img src ={bot.avatar_url} alt=''/>
                            <p>Health: {bot.health} {"    "}
                            Damage: {bot.damage} {"    "}
                            Armor: {bot.armor}</p>
                            <p>Class: {bot.bot_class}</p>
                            <p>D.O.C: {bot.created_at}</p>
                            <p>D.O.U: {bot.updated_at}</p>
                            <button id='delete' onClick={()=> handleDelete(bot.id)}>X</button>
                         </div> 
                    </div>
              
                
            </button>    
                )
            )

            }

        </div>
        </div>
    )
}

export default BotCollection;