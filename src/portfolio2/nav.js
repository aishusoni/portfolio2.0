import React, { useContext, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
 
  
const Nav=()=>{
    return(
        <>
        <ul>
            <li>
                <Link className="Link" to="/portfolio2.0">About me</Link>
            </li>
            <li>
                <Link className="Link" to="/Education">Education</Link>
            </li>
            <li>
                <Link className="Link" to="/Achievement">Achievements</Link>
            </li>
            <li>
                <Link className="Link" to="/Exp">Experience</Link>
            </li>
            <li>
                <Link className="Link" to="/Skills">Skills</Link>
            </li>
            <li>
                <Link className="Link" to="/Feed">Feedback</Link>
            </li>
            
        </ul>
        </>
    );
}

export default Nav;