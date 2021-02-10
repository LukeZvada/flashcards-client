import React, {useContext, useEffect, useState} from "react"

import {CategoryContext} from "./CategoryProvider"

export const CategoryList = (props) => {
    const {categories, getAllCategories, deleteCategory, categoryApprovalStatus} = useContext(CategoryContext)

    const [warning, setWarning] = useState(false)

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
                        {c.approved ? <div style={{color : "green"}}>Approved: True</div>: <div style={{color : "red"}}>Approved :False</div>}
                        <button onClick={() => props.history.push(`/categorymanager/edit/${c.id}`)}>Edit</button>
                        <button onClick={() => setWarning(c.id)}>Delete</button>
                        
                        <button onClick={() => categoryApprovalStatus(c.id, !c.approved)}>{c.approved ? 'Disapprove' : 'Approve'}</button>
                        { warning === c.id ?
                        <> 
                        <div>You sure?</div>
                        <button onClick={() => deleteCategory(c)}>Yes</button>
                        <button onClick={() => setWarning(false)}>Cancel</button>
                        </>
                        : ''
                        }
                        
                    </section>
                    
                })
            }
        </div>
        <button onClick={() => {props.history.push("/categorymanager/create")}}>
            Add
        </button>
        </>
    )
}