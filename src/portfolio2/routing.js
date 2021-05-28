import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import Nav from './nav';
import Intro from './intro'
import Skills from './skills';
import Achi from './achi';
import Educat from './educat';
import Exp from './exp';
import Feed from './feedback';


const Routing=()=>{
    const [open,setOpen]=useState(false);
    return (
        <Router>
            <button className="btn btn-dark navbtn" onClick={()=>{setOpen(!open)}}> ≡ </button>
            {open && <Nav />}
            <Switch>
                <Route exact path='/portfolio2.0/'>
                    <Intro navopn={open}/>
                </Route>
                <Route path='/Education'>
                    <Educat navopn={open}/>
                </Route>
                <Route path='/Achievement'>
                    <Achi navopn={open}/>
                </Route>
                <Route path='/Exp'>
                    <Exp navopn={open}/>
                </Route>
                <Route path='/Skills'>
                    <Skills navopn={open}/>
                </Route>
                <Route path='/feed'>
                    <Feed navopn={open}/>
                </Route>
                <Route path='*'>
                    <div className="error">
                        <h1>SORRY NO SUCH PAGE EXISTS</h1>
                    </div>
                </Route>
            </Switch>
        </Router>
    );
};
export default Routing;