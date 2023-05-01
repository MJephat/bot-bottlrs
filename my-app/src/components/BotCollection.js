// import React from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import './bot.css'
// import { Link } from 'react-router-dom';
// import YourBotArmy from './YourBotArmy';




// function BotCollection(){
//     //  creating State variables
//     const [bots, setBots] = useState([]);
//     // const [isbot,setIsBot] = useState(false)

//     // fetching data using UseEffect from the API
//   useEffect(() => {
//     fetch(" http://localhost:8001/bots")
//       .then((res) => res.json())
//       .then((bots) => setBots(bots));

//   }, []);

//   // function for Delete from the API by id
//   function handleDelete(id){
//     console.log(id)
//     fetch(`http://localhost:8001/bots/${id}`, {
//       method: "DELETE",
//     })
//       .then((res) => {
//         if (res.ok) {
//           // console.log("Are you sure you want to delete this bot");
//           setBots(bots.filter((remove) => remove.id !== id));
//         } else {
//           throw new Error("Event couldn't be completed");
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//     return(
//         <div>
//         <div className='item-container'>
//             <ul>
//             {bots.map((bot) =>(
//             <button>
//                     <div li key={bot.id}>
//                         <div className='card' >
//                         {/* {isbot && <YourBotArmy />} */}
//                              ID: {bot.id}
//                             <h3>Name: {bot.name}</h3>
//                             <img src ={bot.avatar_url} alt=''/>
//                             <p>Health: {bot.health} {"    "}
//                             Damage: {bot.damage} {"    "}
//                             Armor: {bot.armor}</p>
//                             <p>Class: {bot.bot_class}</p>
//                             <p>D.O.C: {bot.created_at}</p>
//                             <p>D.O.U: {bot.updated_at}</p>
                            
//                             <button id='delete' onClick={()=> handleDelete(bot.id)}>X</button>
//                          </div> 
//                     </div>
//                     <Link to="/yourBotArmy/bot.id">Your Bot Army</Link>
                
//             </button>    
//                 )
//             )

//             }
//             </ul>
//         </div>
//         </div>
//     )
// }

// export default BotCollection;