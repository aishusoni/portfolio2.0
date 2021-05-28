import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import resumeData from './resumeData';
const DataContext = React.createContext(resumeData);

const Exp=({navopn})=>{
    const data = useContext(DataContext);
    return (
        <div className="Educat" style={{
            marginLeft:navopn ? "20%" : "0rem",
        }}>
            <h1 className="eduname">EXPERIENCE</h1>
            <Router>
                <div className="row">
                    
                        {data.work && data.work.map((subject)=>{
                            return (
                                <div className="coloumn">
                                        <Link className="educlass" to={'/Exp/'+subject.idx}>{subject.CompanyName}</Link>
                                </div>
                            );
                        })}
                    
                </div>
                <Switch>
                    {
                        data.work && data.work.map((subject)=>{
                            return (
                                <Route exact path={'/Exp/'+subject.idx}>
                                    <div className="row2">
                                        <div className="coloumn2 a a2" style={{
                                            paddingTop:"7rem !important" ,
                                            textAlign:"center"
                                        }} >
                                            <h2>{subject.CompanyName}</h2>
                                        </div>
                                        <div className="coloumn2 b b2" style={{
                                            paddingTop:"3rem",
                                            fontSize:"18px",
                                            textAlign:"left",
                                        }}>
                                            <p><b>Specialization </b> : {subject.specialization}</p>
                                            <p><b>Achievement </b> : {subject.achievements}</p>
                                            <p><b>Tenure </b> : {subject.tenure}</p>
                                            <p><b>Contact </b> : {subject.contact}</p>
                                        </div>
                                    </div>
                                </Route>
                            );
                        })
                    }
                    </Switch>
                </Router>            
        </div>
    );
}
export default Exp;