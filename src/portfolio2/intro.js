import React, { useContext, useState } from 'react';
import resumeData from './resumeData';
const DataContext = React.createContext(resumeData);

const Intro=({navopn})=>{
    const data = useContext(DataContext);
    const [count,setCount]=useState(1);
    if(count>13){
        setCount(1);
    }
    return (
        <div className="intro" style={{
            marginLeft:navopn ? "20%" : "0rem",
        }}>
            <h1 className="personame">{data.name}</h1>
            <p className="abtme">{data.aboutme}</p>
            <h3 className="thngs">THINGS I WANT YOU TO FOCUS ON</h3>
            <div className="robox" onClick={()=>{setCount(count+1)}}>
            {
                data.robot && data.robot.map((things)=>{
                    if(count===things.id)
                    {
                        return (
                            <div>
                                <h2>{things.robo}</h2>
                                {/* <p>{count}</p> */}
                            </div>
                            );
                    }
                    
                })
            }
            </div>
        </div>
    );
}
export default Intro;