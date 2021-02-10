import React, { useContext, useEffect, useRef, useState } from 'react'
import { QuestionContext } from './QuestionProvider';

export const QuestionCard = () => {
    const { questions, getAllQuestions } = useContext(QuestionContext)
    const [question, setQuestion] = useState({})
    const [answer, setAnswer] = useState(false);
    const showAnswer = () => setAnswer(true);


    useEffect(() => {
        getAllQuestions()
        const randomQuestion = questions[Math.floor(Math.random() * questions.length)]
        setQuestion(randomQuestion)
    }, [])

    const nextQuestion = () => {
        const nextQuestion = questions[Math.floor(Math.random() * questions.length)]
        setQuestion(nextQuestion)

    }

    return (
        <>


            {setAnswer ?
                <section className="question">
                    <h3 className="question__answer">{question.answer_value}</h3>
                </section>
                :
                <section className="question">
                    <h3 className="question__text">{question.question_text}</h3>
                </section>
            }



            <button onClick={showAnswer}>
                Answer
            </button>
            <button onClick={nextQuestion}>
                Skip
            </button>
        </>

    )
}