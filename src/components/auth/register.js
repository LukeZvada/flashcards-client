import React, { useRef } from "react"
import { Link } from "react-router-dom"
import "./auth.css"

export const Register = (props) => {
    const userName = useRef()
    const password = useRef()
    const email = useRef()
    const firstName = useRef()
    const lastName = useRef()
    const verifyPassword = useRef()
    const passwordDialog = useRef()


    const handleRegister = (e) => {
        e.preventDefault()
        if (password.current.value === verifyPassword.current.value) {
            const newUser = {
                "username": userName.current.value,
                "password": password.current.value,
                "email": email.current.value,
                "first_name": firstName.current.value,
                "last_name": lastName.current.value
            }
            return fetch("http://localhost:8000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(newUser) //adds new user to the db
            })
                .then(res => res.json())
                .then(res => {
                        localStorage.setItem("fc_user", res.token)
                        props.history.push("/") //redirects to home page
                })
        } else {
            passwordDialog.current.showModal()
        }
    }

    return (
        <main className="container--register">

            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Passwords do not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>
            <section className="register">
                <form className="form--register" onSubmit={handleRegister}>
                    <h2>Register an account</h2>
                    <fieldset className="register--field">
                        <label htmlFor="userName"> Username </label>
                        <input ref={userName} type="text" name="userName" className="form-control" placeholder="display name" />
                    </fieldset>
                    <fieldset className="register--field">
                        <label htmlFor="inputPassword"> Password </label>
                        <input ref={password} type="password" name="password" className="form-control" placeholder="password" required />
                    </fieldset>
                    <fieldset className="register--field">
                        <label htmlFor="verifyPassword"> Verify Password </label>
                        <input ref={verifyPassword} type="password" name="verifyPassword" className="form-control" placeholder="re-enter password" required />
                    </fieldset>
                    <fieldset className="register--field">
                        <label htmlFor="inputPassword"> First Name </label>
                        <input ref={firstName} type="text" name="first_name" className="form-control" placeholder="first name" required />
                    </fieldset>
                    <fieldset className="register--field">
                        <label htmlFor="inputPassword"> Last Name </label>
                        <input ref={lastName} type="text" name="last_name" className="form-control" placeholder="last name" required />
                    </fieldset>
                    <fieldset className="register--field">
                        <label htmlFor="inputPassword"> Email </label>
                        <input ref={email} type="text" name="email" className="form-control" placeholder="email" required />
                    </fieldset>
                    <fieldset className="register--field">
                        <button className="register--button" color="info" type="submit">Register</button>
                    </fieldset>
                </form>
                <section className="link--register">
                    <div>Already Registered?{" "}
                    <Link to="/login">Login</Link>
                    </div>
                </section>
            </section>
        </main>
    )
}