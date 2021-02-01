import React from "react"
import { Route, Redirect } from "react-router-dom"



export const ApplicationViews = () => {
    return <>



        <Route path="/logout" render={
            (props) => {
                localStorage.removeItem("td_user")
                props.history.push("/login")
            }
        } />
    </>
}