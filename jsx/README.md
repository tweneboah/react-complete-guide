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




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
