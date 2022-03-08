//apiKey 563492ad6f91700001000001250c6b594a244bf1aa0339e61acce5e2
import React from "react";
import "./Photos.css"

export default function Photos(props) {

    if (props.photos) {
        return (
            <section className="photos">
                <div className="row">
                    {props.photos.map(function(photo, index) {
                        return (
                            <div className="col-4" key={index}>
                                <a href={photo.src.original} target="_blank" rel="noreferrer">
                                    <img src={photo.src.landscape} key={index} className="img-fluid" alt={photo.alt}/>
                                </a>
                            </div>
                        )
                    })}                
                </div>
            </section>
        )
    } else return null;
}