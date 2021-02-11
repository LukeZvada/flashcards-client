import React, { useContext, useEffect, useState } from 'react'
import { QuestionContext } from './QuestionProvider';

export const QuestionCard = () => {
    const { questions, getAllQuestions } = useContext(QuestionContext)
    const [question, setQuestion] = useState({}) //set the state of the randomly generated question
    const [answer, setAnswer] = useState(false); //determines whether to render anwer or question, and logical buttons
    const showAnswer = () => setAnswer(true); //function to toggle between rendering the answer or not


    useEffect(() => {
        console.log("test")
        getAllQuestions()
        const randomQuestion = questions[Math.floor(Math.random() * questions.length)]
        setQuestion(randomQuestion)


    }, [])

    //when the user clicks Skip, generate a new random question
    const nextQuestion = () => {
        const nextQuestion = questions[Math.floor(Math.random() * questions.length)]
        setAnswer(false)
        setQuestion(nextQuestion)

    }

    return (
        <>
            <section className="flashcard">



                {answer ?

                    <section className="question">
                        <h3 className="question__answer">{question.answer_value}</h3>
                    </section>
                    :
                    <section className="question">
                        <h3 className="question__text">{question.question_text}</h3>
                    </section>
                }


                {answer ? "" :
                    <button className="button" onClick={showAnswer}>
                        Answer
                </button>
                }

                {answer ?
                    <button className="button" onClick={nextQuestion}>
                        Next
                </button>
                    :
                    <button className="button" onClick={nextQuestion}>
                        Skip
                </button>
                }

            </section>
        </>

    )
}