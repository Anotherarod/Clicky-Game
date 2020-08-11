//Import hav and styling and link to react
import React from "react";
import "./nav.css";
//Object with parameters for user input
const nav = props => {

    const messageClass = () => {
        if (props.message === "Good Choice!") {
            return "correct";
        } else if (props.message === "HaHaHa Wrong Choice!") {
            return "incorrect";
        }
    }

    return (
        <nav className="navbar">
            <ul>
                <li className="brand">
                    {props.brand}
                </li>
                <li id="message" className={messageClass()}>
                    {props.message}
                </li>
                <li>
                    <span className="score"> Score: {props.score}</span> <span className="scoreSplit">|</span> <span className="score">Top Score: {props.hiScore}</span>
                </li>
            </ul>
        </nav>
    )

}

export default nav;