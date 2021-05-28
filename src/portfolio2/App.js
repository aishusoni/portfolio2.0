import React from 'react';
import resumeData from './resumeData.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './routing.js';

const DataContext = React.createContext(resumeData);

const App=()=> {
    return(
        <div className="body">
            <DataContext.Provider value={resumeData}>
                <Routing />
            </DataContext.Provider>
        </div>
    );

}

export default App;