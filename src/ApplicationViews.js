import React from "react"
import { Route, Redirect } from "react-router-dom"
import {QuestionCard} from "./components/Dashboard/QuestionCard"
import {QuestionProvider} from "./components/Dashboard/QuestionProvider"



export const ApplicationViews = () => {
    return <>



        <Route path="/logout" render={
            (props) => {
                localStorage.removeItem("td_user")
                props.history.push("/login")
            }
        } />
        <QuestionProvider>
            <Route path="/dashboard" render={
                (props) => <QuestionCard {...props} />
            } />
        </QuestionProvider>
    </>
}