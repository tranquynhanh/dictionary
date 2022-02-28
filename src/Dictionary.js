import React, {useState} from "react";
import axios from "axios";
import "./Dictionary"

export default function Dictionary() {
    let [keyWord, setKeyWord] = useState("")

    function handleResponse(response) {
        console.log(response.data[0])
    }

    function search(e) {
        e.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
        axios.get(apiUrl).then(handleResponse);
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