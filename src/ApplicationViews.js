import React from "react"
import { Route, Redirect } from "react-router-dom"

import {CategoryProvider} from "./components/categories/CategoryProvider"
import {CategoryList} from "./components/categories/CategoryList"

export const ApplicationViews = (props) => {
    return <>
        <CategoryProvider>
            <Route exact path="/categorymanager"> <CategoryList {...props} /> </Route>
        </CategoryProvider>


        <Route path="/logout" render={
            (props) => {
                localStorage.removeItem("td_user")
                props.history.push("/login")
            }
        } />
    </>
}