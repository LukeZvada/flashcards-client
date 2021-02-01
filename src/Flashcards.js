import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./components/navbar/navbar"



export const Flashcards = (props) => (
    <>
         <Route render={() => {
            if (localStorage.getItem("fc_user")) {
                return (
                    <>
                        <Route render={props => <NavBar {...props} />} />
                        <Route render={props => <ApplicationViews {...props} />} />
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
    </>
)