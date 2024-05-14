import React from "react"
import "./title.css"

export default function Title() {
    return (
        <div className="title" onClick={() => window.open('/', '_self')}>
            <p><i>Our</i></p>
            <h1>REPUBLIC</h1>
        </div>
    );
}