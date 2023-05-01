// import './App.css';
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import BotCollection from './components/BotCollection';
// import YourBotArmy from './components/YourBotArmy';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <YourBotArmy />
//         <Routes>
//           <Route path="/" element={<BotCollection />} />
//         </Routes>
//       </Router>
//       </div>
//   );
// }

// export default App;
import React from "react"
import BotsPage from "./containers/BotsPage"
import "./components/bot.css"

export default function App() {
  return (
    <div className="App">
      <BotsPage />
    </div>
  )
}