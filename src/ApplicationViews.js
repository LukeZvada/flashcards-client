import React from "react"
import { Route, Redirect } from "react-router-dom"
import { MasterList } from "./components/master/MasterList"
import { QuestionProvider } from "./components/questions/QuestionProvider"



export const ApplicationViews = () => {
    return <>
    
        <QuestionProvider>
            <Route exact path="/masterlist" render={
                props => <MasterList {...props} />
            } />
        </QuestionProvider>


        <Route path="/logout" render={
            (props) => {
                localStorage.removeItem("td_user")
                props.history.push("/login")
            }
        } />
    </>
}