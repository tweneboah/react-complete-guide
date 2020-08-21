# What's React js?

React is a JavaScript library for building user interfaces

# Introducing JSX

1. It's use to describe what the UI should look like
2. JSX produces React “elements” eg: (h1, div.....)
   3.JSX (short for JavaScript eXtension) is a React extension that makes it easy for web developers to modify their DOM by using simple, HTML-style code

# Virtual DOM

If you’re not using React JS (and JSX), your website will use HTML to update its DOM (the process that makes things “change” on screen without a user having to manually refresh a page). This works fine for simple, static websites, but for dynamic websites that involve heavy user interaction it can become a problem (since the entire DOM needs to reload every time the user clicks a feature calling for a page refresh).

However, if a developer uses JSX to manipulate and update its DOM, React JS creates something called a Virtual DOM. The Virtual DOM (like the name implies) is a copy of the site’s DOM, and React JS uses this copy to see what parts of the actual DOM need to change when an event happens (like a user clicking a button).

Let’s say a user enters a comment in a blog post form and pushes the “Comment” button. Without using React JS, the entire DOM would have to update to reflect this change (using the time and processing power it takes to make this update). React, on the other hand, scans the Virtual DOM to see what changed after a user action (in this case, a comment being added) and selectively updates that section of the DOM only.

This kind of selective updating takes less computing power and less loading time, which might not sound like much when you’re talking about a single blog comment, but—when you start to think about all the dynamics and updating associated with even a slightly complex website—you’ll realize it adds up to a lot.

# Embedding Expressions in JSX

1. To embed an expression or variable into jsx wrap it on a curly braces
2. You can embed js expressions, statements and functions

## Passing varible to jsx

```js
const name = 'Emmanuel Tweneboah';
const element = <h1>Hi {name}</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

## Passing a function to jsx with data

```js
//Data
const userData = {
  name: 'Joe Doe',
};

// Function to take the userData
//function
function printMyName(user) {
  return user.name;
}
```

## Pass this function to jsx

```js
//passing function to jsx .This type of function is call immediately return function
const element2 = <h1>Hi {printMyName(userData)}</h1>;
```

## Render to the DOM

```js
//HOC
ReactDOM.render(element2, document.getElementById('root'));
```

**ReactDOM.render** is HOF that accept a function and variable as argument

## JSX is an Expression Too

You can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:

```js
//JSX is an Expression
function printMyName2(user) {
  if (user) {
    return <p>Hi {user.name} you are welcome</p>;
  } else {
    return <p>You are a stranger</p>;
  }
}
const element3 = <h1>Hi {printMyName2(userData)}</h1>;

//HOC, this takes jsx element  and DOM root
ReactDOM.render(element3, document.getElementById('root'));
```

# Specifying Attributes with JSX

```html
const element =
<div tabindex="0"></div>
;
```

1. For example you want to add certain className base on condition

```html
<div className="`${age">4 ? 'green' : 'red'}`></div>
;
```

2. Embed a JavaScript expression in an attribute

```js
const element = <img src={user.avatarUrl} />;
```
