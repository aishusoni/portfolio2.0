import React, { useContext, useState } from 'react';
import resumeData from './resumeData';
const DataContext = React.createContext(resumeData);

const Achi=({navopn})=>{
    const data = useContext(DataContext);
    const [bool,setBool]=useState(false);
    return (
        <div className="skills" style={{
            marginLeft:navopn ? "20%" : "0rem",
        }}>
            <h1 className="eduname skh ac">ACHIEVEMENTS</h1>
            <h3 className="skcmt">NOT SOMETHING I AM PROUD OF</h3>
            <button className="btn btn-btn-Dark expbtn" onClick={()=>setBool(!bool)}>FOR DETAILS</button>
            <span>
                {data.achievements && data.achievements.map((subject)=>{
                    return (<span>
                        <h2 className="sku">{subject.name}</h2>
                        <p className="skuin">{bool && subject.description}</p>
                        
                    </span>);
                })}
            </span>
        </div>
    );
}
export default Achi;