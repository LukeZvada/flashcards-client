import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./components/navbar/navbar"
import { Login } from "./components/auth/login"
import { Register } from "./components/auth/register"
import { UserProvider } from "./components/users/UserProvider"



export const Flashcards = (props) => (
    <>
        <UserProvider>
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
        </UserProvider>

        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
    </>
)