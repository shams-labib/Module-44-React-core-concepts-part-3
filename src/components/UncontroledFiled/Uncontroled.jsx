import React, { useRef } from 'react';

const Uncontroled = () => {

    const emailRef = useRef('');

    const passwordRef = useRef('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(emailRef.current.value)

        const pass = passwordRef.current.value;
        console.log(pass)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="text" name=""  />
                <br />
                <input ref={passwordRef} type="password" name=""  />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Uncontroled;