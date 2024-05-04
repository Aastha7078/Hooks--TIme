import React, { useState } from "react";

const App =()=>{
    
    const state=useState();
    //console.log(state);
    //use state return 2 data current data and updated data 
    //use state is a function that return a array  2 item {undefine,f }{state,update}
    const [count,setCount]=useState(3);//initial value

const IncNumber=()=>{
   setCount(count+5);

};
return(
    <>
    <h1>{count}</h1>
    <button onClick={IncNumber}>Click me </button>
</>
);
};
export default App;