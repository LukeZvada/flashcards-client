import React from "react"
import { Route} from "react-router-dom"

import {CategoryProvider} from "./components/categories/CategoryProvider"
import {CategoryList} from "./components/categories/CategoryList"
import { CategoryForm } from "./components/categories/CategoryForm"

export const ApplicationViews = (props) => {
    return <>
        <CategoryProvider>
            <Route exact path="/categorymanager"> <CategoryList {...props} /> </Route>
            <Route exact path="/categorymanager/create" render={props => {return <CategoryForm {...props} /> }} />
            <Route exact path="/categorymanager/edit/:categoryId(\d+)" render={props => <CategoryForm {...props} /> } />
        </CategoryProvider>


        <Route path="/logout" render={
            (props) => {
                localStorage.removeItem("td_user")
                props.history.push("/login")
            }
        } />
    </>
}