import React from 'react';
import useInputField from '../Hooks/UseinputFiled';

const HookForm = () => {
    const [name, nameOnchange] = useInputField('');
    const [email, emailOnchange] = useInputField('')

const handleSubmit = e =>{
    e.preventDefault();
    console.log('submit', name, email)

}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                 <input type="text" onChange={nameOnchange} defaultValue={name} />
                 <br />
                 <input type="email" onChange={emailOnchange} defaultValue={email} id="" /> <br />
                 <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;