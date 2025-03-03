import React from "react"
import {serverSideFunction} from "../../utils/serverSideFunction"
import SlickCarosol from "../../components/slick-carosol"; // Ensure the path is correct

export default function ServerRoutePage() {
    console.log('Server Route component')
    const result = serverSideFunction()



    return (
        <>
        <div>
        <SlickCarosol />
        </div>
        <div className="server-route-page">Server Route</div>
        <p>{result}</p>
        
        </>
    )
}