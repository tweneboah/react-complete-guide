import React from 'react';
import ReactDOM from 'react-dom';

// How react DOM updates

//In the below code we create a function and we pass it to the React DOM and 

const ticking = () => {
  const element = (
    <div>
      <h1>React Rendering</h1>
      <h1>The time is {new Date().toLocaleTimeString()}</h1>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
};

setInterval(ticking, 100);
