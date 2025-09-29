import { useState } from "react";

// Custom Hook

const useInputField = (defaultValue)=>{ 
       const [Field, setField] = useState(defaultValue)

       const handleField = e =>{
        setField(e.target.value)
       }

       return[Field, handleField];
}

export default useInputField;