import Card from "./components/Card"
import db from "./db/textCards.json"

function App() {
  const colorsCard = [{backgroundColor:"hsl(31, 77%, 52%)"}, {backgroundColor:"hsl(184, 100%, 22%)"}, {backgroundColor:"hsl(179, 100%, 13%)"}]

  return (
    <div className="App">
      <div className="cards">
        <Card db = {db["card-1"]} backgroundColor = {colorsCard[0]}/>
        <Card db = {db["card-2"]} backgroundColor = {colorsCard[1]}/>
        <Card db = {db["card-3"]} backgroundColor = {colorsCard[2]}/>
      </div> 
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://portafolio-carlos-guzman.netlify.app/">Carlos Guzmán</a>.
    </div>
    </div>
  )
}

export default App
