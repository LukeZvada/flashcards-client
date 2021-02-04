import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../users/UserProvider"
import "./navbar.css"

export const NavBar = (props) => {
    const { getCurrentUser, currentUser } = useContext(UserContext)

    useEffect(() => {
        getCurrentUser()
    },[])

    return ( //show everything for staff, only Logout for non-staff
        <>
            {currentUser.is_staff ?
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
                        (localStorage.getItem("fc_user") !== null) ?
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
                : <div>
                    {

                        (localStorage.getItem("fc_user") !== null) ?
                            <div className="navbar__item">
                                <Link className="navbar__item"
                                    to="/"
                                    onClick={() => {
                                        localStorage.removeItem("fc_user")
                                    }}
                                >Logout</Link>
                            </div> : ""
                    }
                </div>
            }
        </>
    )
}