import React from "react"



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