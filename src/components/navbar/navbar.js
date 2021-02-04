import React from "react"
import { Link } from "react-router-dom"
import "./navbar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/categorymanager">Category Manager</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/addquestion">Add Question</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/masterlist">Master List</Link>
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
                    </div> : "" 
            }
        </ul>
    )
}