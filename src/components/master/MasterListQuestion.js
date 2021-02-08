import React from "react"

export const MasterListQuestions = (props) => {

    return (
        <>
            <div className="quest-cont">
                <div className="question">
                    {props.question.question_display}
                </div>
            </div>
            <div className="quest-but-cont">
                <button
                    className="btn-small fa fa-edit"
                    onClick={() => {
                        props.history.push(``)
                    }}>edit</button>
                <button
                    className="btn-small fa fa-trash"
                    onClick={() => {
                    }}>delete</button>
            </div>
        </>
    )
}