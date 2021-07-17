import React from 'react';

const Hello = () => {
//----Using JSX-----
//    return (
//        <div className='myClass'>
//            <h1>Hello Benjamin</h1>
//        </div>
//    )
//-----Not using JSX-----
    return React.createElement(
        'div', 
        {id: 'myId', className: 'myClass'}, 
        React.createElement('h1', null, 'Hello Ben'));

}

export default Hello;