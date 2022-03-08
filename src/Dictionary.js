import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css"
import Result from "./Result";

export default function Dictionary(props) {
    let [keyWord, setKeyWord] = useState(props.defaultKeyword)
    let [result, setResult] = useState()
    let [loaded, setLoaded] = useState(false)

    function handleResponse(response) {
        console.log(response.data[0])
        setResult(response.data[0])
    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
        console.log(apiUrl)
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(e) {
        e.preventDefault();
        search();
    }    

    function handleKeyWordChange(e) {
        e.preventDefault();
        setKeyWord(e.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="dictionary">
                <h1>What word do you want to look up?</h1>
                <section>
                <form onSubmit={handleSubmit}>
                    <input type="search" onChange={handleKeyWordChange}/> 
                </form>
                <div className="hint">
                    suggested words: sunset, yoga, hello, dog,...
                </div>
                </section>
                <Result result = {result}/>
            </div>
        )
    } else {
        load();
        return "Loading";
    }

}