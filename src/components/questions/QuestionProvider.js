import React, { useState } from "react"

export const QuestionContext = React.createContext();

export const QuestionProvider = (props) => {
    const [questions, setQuestions] = useState([])

    const getQuestions = () => {
        return fetch(`http://localhost:8000/questions`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("fc_user")}`,
                "Content-Type": "application/json",
            }
        })
            .then(response => response.json())
            .then(setQuestions)
    }

    return (
            <QuestionContext.Provider value={{
                getQuestions, questions
            }}>
                {props.children}
            </QuestionContext.Provider>
        )
    }