import React, { useState } from 'react';

const ControledField = () => {

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(name, email, password)

        if(password.length< 6){
            setError('Mal kom hoya geche')
        }else(
            setError('')
        )
    }
    
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
      const [email, setEmail] = useState('');
      const [name, setName ] = useState('');

      const handleName = e => {
        setName(e.target.value)
      }


    const handleEmailChange = e =>{
          setEmail(e.target.value)
    }

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
                <input type="text" name="" defaultValue={name} onChange={handleName} placeholder='Name'   required/> <br />

                <input type="email" name="" onChange={handleEmailChange} defaultValue={email}  /> <br />

                <input type="password" name="" onChange={handleOnchange} defaultValue={password} placeholder='password'  required/> <br />
                <input type="submit" value="Submit" required />
            </form>

            <p>
                <small style={{color:'red'}}>{error}</small>
            </p>
        </div>
    );
};

export default ControledField;