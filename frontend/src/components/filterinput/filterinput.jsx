import React from "react";

export default function FilterInput({stateinput, setStateInput, lccninput, setLccnInput }) {

    return (
        <section className="filter">
            <div className="USStates">
                <input type="text" placeholder="enter state"
                //stateinput is the useState array declared earlier
                 value={stateinput}
                 onChange={(e) => setStateInput(e.target.value)}
                 />
            </div>

            <div className="lccn">
                <input type="text" placeholder="enter lccn"
                 value={lccninput}
                 onChange={(e) => setLccnInput(e.target.value)}
                />
            </div>
        </section>
    )
}