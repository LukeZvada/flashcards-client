import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"



export const Flashcards = (props) => (
    <>
        <Route render={(props) => {
            if (localStorage.getItem("#")) {
                return <>
                    <ApplicationViews />
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />
    </>
)