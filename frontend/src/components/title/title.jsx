import React from "react"
import "./title.css"

export default function Title() {
    return (
        <div className="title">
            <p><i>Our</i></p>
            <h1><span onClick={() => window.open('/', '_self')}>REPUBLIC</span></h1>
        </div>
    );
}