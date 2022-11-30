import Card from "./components/Card"
import db from "./db/textCards.json"
import icon1 from "./assets/icon-sedans.svg"
import icon2 from "./assets/icon-luxury.svg"
import icon3 from "./assets/icon-suvs.svg"


function App() {
  const colorsCard = [{backgroundColor:"hsl(31, 77%, 52%)"}, {backgroundColor:"hsl(184, 100%, 22%)"}, {backgroundColor:"hsl(179, 100%, 13%)"}]

  return (
    <div className="App" role="content-app">
      <div className="cards" role="main">
        <Card db = {db["card-1"]} backgroundColor = {colorsCard[0]} icon = {icon1}/>
        <Card db = {db["card-2"]} backgroundColor = {colorsCard[1]} icon = {icon3}/>
        <Card db = {db["card-3"]} backgroundColor = {colorsCard[2]} icon = {icon2}/>
      </div> 
      <div className="attribution" role="footer">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://portafolio-carlos-guzman.netlify.app/">Carlos Guzmán</a>.
    </div>
    </div>
  )
}

export default App
