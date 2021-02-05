import React, { useState } from "react"
export const UserContext = React.createContext();

export const UserProvider = (props) => {
    const [currentUser, setCurrentUser] = useState({})


    const getCurrentUser = () => {
        return fetch(`http://localhost:8000/user`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("fc_user")}`,
                "Content-Type": "application/json",
            }
        })
            .then(response => response.json())
            .then(setCurrentUser)
    }

    //flips is_staff to the opposite of what it currently is
    const flipAdmin = (id) => {
        return fetch(`http://localhost:8000/user/${id}/flip_is_staff`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("fc_user")}`,
                "Content-Type": "application/json",
            }
        })
    }


    return (
            <UserContext.Provider value={{
                 getCurrentUser, currentUser, flipAdmin
            }}>
                {props.children}
            </UserContext.Provider>
        )
    }