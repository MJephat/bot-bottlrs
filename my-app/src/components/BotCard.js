import React from "react"
import "./bot.css"

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star"
}

const BotCard = props => {
  const { bot, action, removeCard } = props

  function handleClick(e) {
    console.log("handleClick fired!")
    // e.stopPropagation()
    action(bot)
  }

  function handleDischarge(e) {
    console.log("Red X Clicked!")
    e.stopPropagation()
    removeCard(bot)
  }


  return (
    <div>
    <div className='item-container'>
  
    
      <div className= "grid"
         li key={props.bot.id}
        onClick={handleClick}>
            
        <div className='card'>
         <div>
          <img src={props.bot.avatar_url} alt="bot"/>
        </div>
             ID: {props.bot.id}
            <h3> Name: {props.bot.name}</h3>
            <i className={botTypeClasses[props.bot.bot_class]} />
            CP: {props.bot.catchphrase}<br></br>
            <i className="icon heartbeat" />
            Health: {props.bot.health}{"   "}
            <i className="icon lightning" />
            Damage: {props.bot.damage}{"    "}
            <i className="icon shield" />Armor: {props.bot.armor}
      
            <div className="ui center aligned segment basic">
              <button className="delete" onClick={handleDischarge}>X</button>
            </div>
            </div>
        </div>
     
       
   
    </div >
</div>
  )
}

export default BotCard;