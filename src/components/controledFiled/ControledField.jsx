import React, { useState } from 'react';

const ControledField = () => {

    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    
    const [password, setPassword] = useState('');

    const handleOnchange = e =>{
           
           console.log(e.target.value)
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <input type="text" name="" placeholder='Name' id=""  required/> <br />
                <input type="password" name="" onChange={handleOnchange} defaultValue={password} placeholder='password' id=""  required/> <br />
                <input type="submit" value="Submit" required />
            </form>
        </div>
    );
};

export default ControledField;