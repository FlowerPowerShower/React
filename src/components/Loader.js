import React from "react"
import spinner from "./spinner.gif"

const Loader = () => {
    return(
        <div className="loader">
            <img src={spinner} alt="Loading" />
            <h1> Fetcing data </h1>
        </div>
    )
}

export default Loader