import React from "react";

export default function Phonetics(props) {
    return (
        <div className="Phonetic">
            <a href={props.props.audio} target="_blank" rel="noreferrer">Listen</a>
            {props.props.text}
        </div>
    )
}