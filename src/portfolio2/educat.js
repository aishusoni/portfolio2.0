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

const Educat=({navopn})=>{
    const data = useContext(DataContext);
    return (
        <div className="Educat" style={{
            marginLeft:navopn ? "20%" : "0rem",
        }}>
            <h1 className="eduname">EDUCATION</h1>
            <Router>
                <div className="row">
                    
                        {data.education && data.education.map((subject)=>{
                            return (
                                <div className="coloumn">
                                        <Link className="educlass" to={'/Education/'+subject.idx}>{subject.UniversityName}</Link>
                                </div>
                            );
                        })}
                    
                </div>
                <Switch>
                    {
                        data.education && data.education.map((subject)=>{
                            return (
                                <Route exact path={'/Education/'+subject.idx}>
                                    <div className="row2">
                                        <div className="coloumn2 a" style={{
                                            paddingTop:"7rem !important" ,
                                            textAlign:"center"
                                        }} >
                                            <h2 >{subject.UniversityName}</h2>
                                        </div>
                                        <div className="coloumn2 b" style={{
                                            paddingTop:"3rem",
                                            fontSize:"18px",
                                            textAlign:"left",
                                        }}>
                                            <p><b>Specialization </b> : {subject.specialization}</p>
                                            <p><b>Comment </b> : {subject.comment}</p>
                                            <p><b>Tenure </b> : {subject.tenure}</p>
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
export default Educat;