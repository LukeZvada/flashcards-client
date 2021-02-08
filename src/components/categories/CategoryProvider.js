import React, {useState} from "react"

export const CategoryContext = React.createContext()

export const CategoryProvider = (props) => {
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState({})

    const getAllCategories = () => {
        return fetch("http://localhost:8000/categories", {
            headers : {
                "Authorization": `Token ${localStorage.getItem("fc_user")}`
            }
        })
        .then(res => res.json())
        .then(setCategories)
    }

    const getSingleCategory = (id) => {
        return fetch(`http://localhost:8000/categories/${id}`, {
            headers : {
                "Authorization": `Token ${localStorage.getItem("fc_user")}`
            }
        })
        .then(res => res.json())
        .then(setCategory)
    }

    const addCategory = (newCategory) => {
        return fetch("http://localhost:8000/categories", {
            method : "POST",
            headers : {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("fc_user")}`
            },
            body : JSON.stringify(newCategory)        
        })
        .then(getAllCategories)
    }

    return (
        <CategoryContext.Provider value={{
            categories,
            getAllCategories,
            category,
            getSingleCategory,
            addCategory
        }}>
            {props.children}
        </CategoryContext.Provider>
    )
}