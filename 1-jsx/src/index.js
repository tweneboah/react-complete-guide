import React from 'react';
import ReactDOM from 'react-dom';

//passing variable to jsx
const name = 'Emmanuel Tweneboah';
const add = 2 + 3;

//Imediately invoked function
const element = <h1>Hi {name}</h1>;

//data
const userData = {
  name: 'Joe Doe',
};

//function
function printMyName(user) {
  return user.name;
}

//JSX is an Expression
function printMyName2(user) {
  if (user) {
    return <p>Hi {user.name} you are welcome</p>;
  } else {
    return <p>You are a stranger</p>;
  }
}

//passing function to jsx
const element2 = <h1>Hi {printMyName(userData)}</h1>;
const element3 = <h1>Hi {printMyName2(userData)}</h1>;

//HOC, this takes jsx element  and DOM root
ReactDOM.render(element3, document.getElementById('root'));

const dev = ['Emma', 'frans', 'giftaka', 'crimson'];
const filtered = dev.map(a => a).filter(b => !(!b == 'Emma'));

console.log(filtered);
