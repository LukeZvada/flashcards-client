import React from "react"

export const MasterListQuestions = (props) => {

    return (
        <>
            <div className="quest-cont">
                <div className="question">
                    {props.question.question_display}
                </div>
            </div>
        </>
    )
}