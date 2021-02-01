import React from "react"
import { Link } from "react-router-dom"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/add">Add</Link>
            </li>
            {
                (localStorage.getItem("td_user") !== null) ?
                    <div className="navbar__item">
                        <Link className="navbar__item"
                            to="/"
                            onClick={() => {
                                localStorage.removeItem("fc_user")
                            }}
                        >Logout</Link>
                    </div> :
                    <>
                        <li className="nav-item">
                            <Link className="navbar__item"to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar__item"to="/register">Register</Link>
                        </li>
                    </>
            }
        </ul>
    )
}