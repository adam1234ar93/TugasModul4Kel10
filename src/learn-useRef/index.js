import { useState, useEffect, useRef } from "react";
import "./index.css";


export default function Index(){
    const [inputValue, setInputValue] = useState("");
    const [warna, setWarna] =useState('navy');
    const [message, setMessage]=useState('Silahkan diklik');

    
    

  const count = useRef(0);
  

  const ubahWarna = () => {
    if (warna==="navy") {
        setWarna('darkgreen');
    }
    else {
        setWarna('navy');
    }
};
   


  useEffect(() => {
    count.current = count.current + 1;
  });

  useEffect(() => {
    if (count.current<10){
        setMessage("Silahkan diklik...")
    }

    else if (count.current<25){
        setMessage("Ok, cukup. Stop...")
    }

    else {
        setMessage("Saya mohon berhenti... kasihan waktu anda")
    }

  });
 
   

  return (
    <div className="Main">

      

        
      <button 
      style={{height:'100px', width:'120px', backgroundColor:`${warna}`, color:"White"}} onClick={ubahWarna}>Change</button>
      
      <h1>{message}</h1>
     
    </div>
  );
}