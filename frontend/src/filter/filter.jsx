import React from "react";
import { useState, useEffect } from "react";

import "./filter.css";


// console.log(USstate)

function Filter() {

    

    return (
        <section className="filter">
            <div className="USStates">
                <input type="text" placeholder="enter state" />
            </div>

            <div className="lccn">
                <input type="text" placeholder="enter lccn" />
            </div>

        </section>
    )
}

export default Filter;