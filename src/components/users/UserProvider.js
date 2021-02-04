import React, { useState } from "react"
export const UserContext = React.createContext();

export const UserProvider = (props) => {
    const [currentUser, setCurrentUser] = useState({})


    const getCurrentUser = () => {
        return fetch(`http://localhost:8000/currentuser`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("rare_user_id")}`,
                "Content-Type": "application/json",
            }
        })
            .then(response => response.json())
            .then(setCurrentUser)
    }


    return (
            <UserContext.Provider value={{
                 getCurrentUser, currentUser
            }}>
                {props.children}
            </UserContext.Provider>
        )
    }