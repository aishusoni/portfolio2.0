import React, { useContext, useState } from 'react';
import resumeData from './resumeData';
const DataContext = React.createContext(resumeData);

const Feed=({navopn})=>{
    const [fd,setfd]=useState({Name:"",Email:"",Comment:""});
    const [list,setList]=useState([]);
    const changedFd=(event)=>{
        const val=event.target.value;
        const temp=event.target.name;
        setfd({...fd,[temp]:val});
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(fd.Name && fd.Email && fd.Comment){
            const newFd={...fd, id: new Date().getTime().toString()}
            setList([...list,newFd]);
            setfd({Name:"",Email:"",Comment:""});
            console.log(list);
        } 
    }
    return (
        <div className="Feed" style={{
            marginLeft:navopn ? "20%" : "0rem",
        }}>
            <form onSubmit={handleSubmit}>
                <p>
                <label>Name:&nbsp;&nbsp;</label>
                <input type="text" name="Name" value={fd.Name} onChange={changedFd}/>
                </p>
                <p>
                <label>E-mail: &nbsp;</label>
                <input type="text" name="Email" value={fd.Email} onChange={changedFd}/>
                </p>
                <p>
                <label>Comments:&nbsp;&nbsp;</label>
                <textarea  name="Comment" value={fd.Comment} onChange={changedFd}/>
                </p>
                <p>
                <button className="btn btn-btn-Dark subtn" type="submit">Submit</button>
                </p>
            </form>
            <table>
                <th>Name</th>
                <th>Email</th>
                <th>comments</th>
                {list.map((item)=>{
                    return(
                        <tr>
                            <td >
                                {item.Name}
                            </td>
                            <td>
                                {item.Email}
                            </td>
                            <td >
                                {item.Comment}
                            </td>
                        </tr>
                    );
                })}                
            </table>
            <footer style={{
                marginTop:"17rem",
                bottom:"0px"
            }}>
          <div >
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  <div>
                  <p style={{
                    textAlign:"center",
                    color:"white",
                  }}>
                    &nbsp;&nbsp;
                    <b>E-Mail: </b>&nbsp;
                    {resumeData.email}
                    &nbsp;&nbsp;
                    <b>Phone No.</b> : &nbsp;
                    {resumeData.phone}
                    &nbsp;&nbsp;
                    <b>Address</b> : &nbsp;
                    {resumeData.address}
                  </p>
                  <p style={{
                    textAlign:"center"
                  }}>
                    <a href={item.url}>linkedin</a>
                  </p>
                  </div>
                )
              })
            }
          </div>
          

    </footer>
        </div>
    );
}
export default Feed;