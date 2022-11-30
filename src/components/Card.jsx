import useTextCard from "../customHooks/useTextCard"
import { useState } from "react"

const Card = ({db, backgroundColor, icon}) => {
    const [colorBtn, setColorBtn] = useState({color: backgroundColor.backgroundColor})
    const [title, description] = useTextCard(db)
    const changeColorBtn = (valor) => {
        setColorBtn(valor&&{color: backgroundColor.backgroundColor})
    }
    return (
        <article style={backgroundColor} className="card" role={`card-${title}`}>
            <img src={icon} alt="icon-car"></img>
            <h1 className="card-title"> {title}</h1>
            <p className="card-description"> {description}</p>
            <button onMouseUpCapture={() => {changeColorBtn(true)}} style={colorBtn}className="btn">Learn More</button>
        </article>
    )
}

export default Card