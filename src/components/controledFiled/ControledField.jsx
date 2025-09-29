import React, { useState } from 'react';

const ControledField = () => {

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(password.length< 6){
            setError('Mal kom hoya geche')
        }else(
            setError('')
        )
    }
    
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const handleOnchange = e =>{
           
           console.log(e.target.value)
           setPassword(e.target.value)

        //    if(password.length < 6 ){
        //     setError('Password must be in 6 Character')
        //    }else{
        //     setError('')
        //    }
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <input type="text" name="" placeholder='Name' id=""  required/> <br />
                <input type="password" name="" onChange={handleOnchange} defaultValue={password} placeholder='password' id=""  required/> <br />
                <input type="submit" value="Submit" required />
            </form>

            <p>
                <small style={{color:'red'}}>{error}</small>
            </p>
        </div>
    );
};

export default ControledField;