import React from 'react';
const UserContext =React.createContext('default value')
//remover the above default value for using provider 
//in the main parent element
const provider=UserContext.Provider;
const consumer=UserContext.Consumer;
export {provider,consumer}  