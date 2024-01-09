import React from 'react';

const Add = () => {
    return (
        <div className='add-form'>
            <input type="text" name="Title" id="title" placeholder='Enter The Title' />
           <textarea name="discription" id="discription" cols="30" rows="10" placeholder='Enter Discription'></textarea>
           </div>
     );
}

export default Add;
