import React from "react";

import "./filter.css";


function Filter() {
    return (
        <div className="filter">
            <form>
                <label>filter by state:</label>
                <select className="states">
                    <option>New Hampshire</option>
                    <option>Massachusetts</option>
                </select>
            </form>
        </div>
    )
}

export default Filter;