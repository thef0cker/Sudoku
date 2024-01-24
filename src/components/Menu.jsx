import { NavLink } from "react-router-dom"

const Menu = () => {
    return (
        <div className='container d-flex'>
            <h1 className="sudokuh1">Sudoku</h1>
            <NavLink to="/game" className="btn">Play</NavLink>
        </div>
    )
}

export default Menu 