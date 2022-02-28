import React, {useState} from "react";
import "./Dictionary"

export default function Dictionary() {
    let [keyWord, setKeyWord] = useState("")
    function search(e) {
        e.preventDefault();
        alert(keyWord);
    }

    function handleKeyWordChange(e) {
        e.preventDefault();
        setKeyWord(e.target.value());
    }

    return (
        <div className="dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeyWordChange}/> 
            </form>
        </div>
    )
}