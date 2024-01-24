import { NavLink } from "react-router-dom"

const Lose = () => {
    return (
        <div className='container d-flex'>
            <h1 className="Lost">You Lost</h1>
            <NavLink to="/" className="btn">Play Again</NavLink>
        </div>
    )
}

export default Lose 