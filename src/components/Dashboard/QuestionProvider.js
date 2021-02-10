import React, { useState } from "react"

export const QuestionContext = React.createContext()

export const QuestionProvider = (props) => {
    const [questions, setQuestions] = useState([])
    const [singleQuestion, setSingleQuestion] = useState([])

    const getAllQuestions = () => {
        return fetch(`http://localhost:8000/#`, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("fc_user")}`
            }})
            .then(res => res.json())
            .then(setQuestions)
    }

    const getSingleQuestion = (question) => {
        return fetch(`http://localhost:8000/#/${question}`, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("fc_user")}`
            }})
            .then(res => res.json())
            .then(setSingleQuestion)
    }

    return (
        <QuestionContext.Provider value={{
            questions, singleQuestion, getAllQuestions, getSingleQuestion
        }}>
            {props.children}
        </QuestionContext.Provider>
    )
}

