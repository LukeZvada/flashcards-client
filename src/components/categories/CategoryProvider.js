import React, {useState} from "react"

export const CategoryContext = React.createContext()

export const CategoryProvider = (props) => {
    const [categories, setCategories] = useState([])
   

    const getAllCategories = () => {
        return fetch("http://localhost:8000/categories", {
            headers : {
                "Authorization": `Token ${localStorage.getItem("fc_user")}`
            }
        })
        .then(res => res.json())
        .then(sortByApprovalStatus => {
            return sortByApprovalStatus.sort(a => a.approved ? 1 : -1)
        })
        .then(setCategories)
    }

    const getSingleCategory = (id) => {
        return fetch(`http://localhost:8000/categories/${id}`, {
            headers : {
                "Authorization": `Token ${localStorage.getItem("fc_user")}`
            }
        })
        .then(res => res.json())
        
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

    const deleteCategory = (catObj) => {
        return fetch(`http://localhost:8000/categories/${catObj.id}`, {
            method : "DELETE",
            headers : {
                "Authorization": `Token ${localStorage.getItem("fc_user")}`
            }
        }).then(getAllCategories)
    }

    const updateCategory = (catObj) => {
        return fetch(`http://localhost:8000/categories/${catObj.id}`, {
            method : 'PUT',
            headers : {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("fc_user")}`
            },
            body : JSON.stringify(catObj)
        })
    }

    const categoryApprovalStatus = (catId, approvalStatus) => {
        return fetch(`http://localhost:8000/categories/${catId}/approve`, {
            method : "PATCH",
            headers : {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("fc_user")}`
            },
            body : JSON.stringify({approved : approvalStatus})
        }).then(getAllCategories)
    }
 
    return (
        <CategoryContext.Provider value={{
            categories,
            getAllCategories,
            deleteCategory,
            getSingleCategory,
            addCategory,
            updateCategory,
            categoryApprovalStatus
        }}>
            {props.children}
        </CategoryContext.Provider>
    )
}