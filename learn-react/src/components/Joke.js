import React from 'react'

function Joke(props) {
    return (
        <div>
            <h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question} </h3>
            <h5 style={{opacity: props.question ? "1" : ".75"}}>Answer: {props.answer} </h5>
        </div>
    )
}

export default Joke
 