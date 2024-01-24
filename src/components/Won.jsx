import { NavLink } from "react-router-dom"

const Won = () => {
    return (
        <div className='container d-flex'>
            <h1 className="Won">You Won</h1>
            <NavLink to="/" className="btn">Play Again</NavLink>            
        </div>
    )
}

export default Won 