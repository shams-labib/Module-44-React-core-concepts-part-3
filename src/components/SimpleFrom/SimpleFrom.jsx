import React from 'react';

const SimpleFrom = () => {

    const handleSubmit = (e)=>{
//    amra jdi kono btn e click kori seta bar bar web e click korle seta reload nite thake, so ei somossa dur korar jonno "e" peramiter niye setake "preventDefault" diye call kore dilei jhamela paid!


        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Your Name' />
                <br />
                <input type="email" name='email' placeholder='Email' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleFrom;