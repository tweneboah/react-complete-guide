## Rendering Elements

- React elements are like the pieces of html tags with attribute or data

```html
<div>
  <h1>Your age is 32</h1>
  <p>
    When these elements are created and rendered into the DOM it cannot be
    changed
  </p>
</div>
```

1. Elements are the smallest building blocks of React apps.
2. An element describes what you want to see on the screen:
3. React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.

```js
const element = <h1>Hello, world</h1>;
```

4. Elements are what components are “made of”

# Rendering an Element into the DOM

- We only have one div root where we render our application and this is managed by React DOM

```js
const elementToDisplay = <h1>Hello, world</h1>;
ReactDOM.render(elementToDisplay, document.getElementById('root'));
```

# Updating the Rendered Element

- React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

- The only way to update the UI is to create a new element, and pass it to **\*ReactDOM.render()**

### DEMO

```js
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
```

- It calls ReactDOM.render() every second from a setInterval() callback

# React Only Updates What’s Necessary

React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.

Even though we create an element describing the whole UI tree on every tick, only the text node whose contents have changed gets updated by React DOM.

In our experience, thinking about how the UI should look at any given moment, rather than how to change it over time, eliminates a whole class of bugs.
