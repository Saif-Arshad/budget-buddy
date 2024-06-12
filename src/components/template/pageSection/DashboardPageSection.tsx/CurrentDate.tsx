"use client"

import React, {useState} from "react";  
  
function CurrentDate() {  
    setInterval(updatetime, 1000);  
    const now = new Date().toLocaleTimeString();  
    const [time, setTime] = useState(now);  
  
    function updatetime() {  
        const newtime = new Date().toLocaleTimeString();  
        setTime(newtime);  
    }  
  
    return(  
        <span>

        {time}  
        </span>
    );  
}  
  
export default CurrentDate;