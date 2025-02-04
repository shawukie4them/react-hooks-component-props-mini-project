import React from "react";
function About({image="https://cdn.worldvectorlogo.com/logos/react-1.svg", about}){
    return(
        <aside>
            <img src={image} alt="blog logo"/>
            <p>{about}</p>
        </aside>
    );
}

export default About;