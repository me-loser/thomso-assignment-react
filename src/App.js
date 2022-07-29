import React,{useState} from 'react';
import RightDiv from './Components/RightDiv';
import LeftDiv from './Components/LeftDiv';

function App() {
  const [languageIndex,setLanguageIndex]= useState('0');
    const getLanguageIndex = (value) => {
      setLanguageIndex(value.toString());
    };
 return (
   <React.Fragment>
     <LeftDiv langIndex={languageIndex} />
     <RightDiv passLanguageIndex={getLanguageIndex}/>
   </React.Fragment>
 )


};

export default App;
