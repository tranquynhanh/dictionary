import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css"
import Result from "./Result";

export default function Dictionary() {
    let [keyWord, setKeyWord] = useState("")
    let [result, setResult] = useState()

    function handleResponse(response) {
        console.log(response.data[0])
        setResult(response.data[0])
    }

    function search(e) {
        e.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
        console.log(apiUrl)
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeyWordChange(e) {
        e.preventDefault();
        setKeyWord(e.target.value);
    }

    return (
        <div className="dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeyWordChange}/> 
            </form>
            <Result result = {result}/>
        </div>
    )
}