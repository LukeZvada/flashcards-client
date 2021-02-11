import React, {useContext, useEffect, useState} from 'react'

import {CategoryContext} from "./CategoryProvider"

export const CategoryForm = (props) => {
    const {addCategory, updateCategory, getSingleCategory} = useContext(CategoryContext)
    
    const [category, setCategory] = useState({})

    const toEdit = props.match.params.hasOwnProperty("categoryId")

    useEffect(() => {
        if(toEdit) {
            const categoryId = parseInt(props.match.params.categoryId)
            getSingleCategory(categoryId).then(r => setCategory(r))
        }
    }, [])

    const handleChange = (e) => {
        const newCategory = {...category}
        newCategory[e.target.name] = e.target.value
        setCategory(newCategory)
    }

    const makeNewCategory = () => {
        if(toEdit) {
            updateCategory({
                id : category.id,
                label : category.label,
                approved : false
            }).then(props.history.push('/categorymanager'))
        } else {
            addCategory({
                label : category.label
            }).then(props.history.push('/categorymanager'))
        }
        
    }

    return (
        <form className="CategoryForm">
            <h3 className="CategoryForm__title">{toEdit ? "Update Category" : "Create Category"}</h3>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="label">Name :</label>
                    <input type="text" name="label" required autoFocus className="form-control"
                        value={category.label}
                        onChange={handleChange}
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={(e) => {
                   e.preventDefault()
                    makeNewCategory()
                }}
                className="btn btn-warning btn-form">
                    {toEdit ? "Update" : "Save"}
                </button>
                <button className="btn btn-dark" onClick={() => props.history.push('/categorymanager')}>Cancel</button>
        </form>
    )
}