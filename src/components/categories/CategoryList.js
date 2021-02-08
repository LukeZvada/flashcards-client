import React, {useContext, useEffect} from "react"

import {CategoryContext} from "./CategoryProvider"

export const CategoryList = (props) => {
    const {categories, getAllCategories} = useContext(CategoryContext)

    useEffect(() => {
        getAllCategories()
    }, [])

    return (
        <>
        <div className="categories">
            {
                categories.map(c => {
                    return <section key={c.id}>
                        <div>{c.label}</div>
                        <div>{c.approved}</div>
                    </section>
                })
            }
        </div>
        </>
    )
}