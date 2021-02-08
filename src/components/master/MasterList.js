import React, { useContext, useEffect } from "react"
import { QuestionContext } from "../questions/QuestionProvider"
import { UserContext } from "../users/UserProvider"
import { MasterListQuestions } from "./MasterListQuestion"
import "./MasterList.css"

export const MasterList = (props) => {
    const { getQuestions, questions } = useContext(QuestionContext)
    const {getCurrentUser, currentUser} = useContext(UserContext)

    useEffect(() => {
        getQuestions()
    },[])

    useEffect(() => {
        getCurrentUser()
    },[])

    return ( //This component only shows if user is staff
        <>
            {currentUser.is_staff ?
                <article className="master-list">
                    <section className="ml-top-cont">
                        <div className="ml-title">
                            Master Question List...
                        </div>
                    </section>
                    <section className="ml-quest-cont">
                        <div className="ml-questions">
                            {
                                questions.map(q => 
                                    <MasterListQuestions
                                        key={q.id}
                                        question= {q}
                                        {...props}
                                    
                                    />
                            
                                    )
                            }
                        </div>
                    </section>
                </article>
                : null
            }
        </>
    )
}