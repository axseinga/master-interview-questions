export const reactQuestions = [
  {
    id: "R1",
    question: "What is the React Function Component Life-Cycle Method?",
    answer: `<p><b>Mounting:</b> This phase occurs when the component is initially rendered and added to the DOM.</p>
              <p><b>Updating:</b> This phase occurs when the component’s state or props change, causing a re-render. It receives new props or state, usually in response to an interaction.</p>
              <p><b>Unmounting:</b> This phase occurs when the component is removed from the DOM.</p>`,
  },
  {
    id: "R2",
    question: "What is JSX?",
    answer: `<p>JSX stands for JavaScript XML. It is a syntax extension for JavaScript, used with React to describe what the UI should look like. JSX produces React elements.</p>`,
  },
  {
    id: "R3",
    question:
      "What are the differences between functional and class components?",
    answer: `<p>Functional components are stateless, simpler, and are typically used for presentational purposes. Class components are stateful and provide more features via lifecycle methods.</p>`,
  },
  {
    id: "R4",
    question: "What is the purpose of state in React?",
    answer: `<p>The state ( a component’s memory ) is a built-in React object that is used to contain data or information about the component. The state in a component can change over time, and whenever it changes, the component re-renders.</p>`,
  },
  {
    id: "R5",
    question: "What is a prop in React?",
    answer: `<p>Props (short for properties) are a mechanism for passing data from a parent component to its child components.</p>
    <ul>
    <li>Props allow you to configure and customize child components, enabling dynamic and flexible component composition.</li>
    <li>It is a React built-in object that stores the value of attributes of a tag and works similarly to HTML attributes.</li>
    </ul>`,
  },
  {
    id: "R6",
    question: "What is the use of the useState hook?",
    answer: `<p>useState is a hook that allows you to add state to functional components. It returns an array with the current state value and a function to update it.</p>`,
  },
  {
    id: "R7",
    question: "What is the useEffect hook used for?",
    answer: `<p>The useEffect hook in React is used to perform side effects in function components. It allows you to handle lifecycle events and perform actions such as fetching data, subscribing to events, or manipulating the DOM.</p>
    <p>The useEffect hook takes two arguments: a callback function and a dependency array.</p>
    <p>The callback function is executed after every render of the component.</p>
    <p>No dependency passed: Runs on every render</p>
    <p>An empty array: Runs only on the first render</p>
    P<p>rops or state values: Runs on the first render And any time any dependency value changes</p>
    `,
  },
  {
    id: "R8",
    question: "What is a higher-order component (HOC)?",
    answer: `<p>Higher-order components (HOCs) are a pattern in React that allows you to reuse component logic by wrapping components with other components.</p>
    <ul>
    <li>Code Reusability: Extract common logic and reuse it across multiple components.</li>
    <li>Props Manipulation: Modify or pass additional props to the wrapped component.</li>
    <li>Rendering Control: Conditionally render the wrapped component based on specific conditions. (Render hijacking)</li>
    <li>Performance Optimization: Optimize rendering by implementing memorization or caching techniques.</li>
    <li>Context Manipulation: Provide or consume context to share data or behavior between components. State abstraction and manipulation.</li>
    <li>Wrap and enhance functionality from third-party libraries.</li>
    </ul>
    `,
  },
  {
    id: "R9",
    question: "What is the virtual DOM?",
    answer: `<p>Virtual DOM provides an abstraction of the actual HTML DOM. It is a lightweight copy or representation of the real DOM, maintained by React, which allows for efficient updates and rendering of components.</p>`,
  },
  {
    id: "R10",
    question: "How does React handle events?",
    answer: `<p>React handles events using camelCase syntax and passes event handlers as functions rather than strings. Events are normalized across different browsers.</p>`,
  },
  {
    id: "R11",
    question: "What is the purpose of keys in React?",
    answer: `<p>Keys help React identify which items have changed, are added, or are removed. They should be given to elements inside arrays to give them a stable identity.</p>`,
  },
  {
    id: "R12",
    question: "What are fragments in React?",
    answer: `<p>Fragments allow you to group multiple elements without adding an extra node to the DOM. They are useful for returning multiple elements from a component's render method.</p>`,
  },
  {
    id: "R13",
    question: "What is the Context API?",
    answer: `<p>The Context API provides a way to pass data through the component tree without having to pass props down manually at every level. It is used to share values like themes, user info, and settings.</p>`,
  },
  {
    id: "R14",
    question: "What is the use of refs in React?",
    answer: `<p>Refs provide a way to access DOM nodes or React elements created in the render method. They are commonly used to manage focus, text selection, or media playback.</p>`,
  },
  {
    id: "R15",
    question: "What is React Router?",
    answer: `<p>React Router is a library used to handle routing in React applications. It enables navigation among different components, changing the browser URL, and keeping the UI in sync with the URL.</p>`,
  },
  {
    id: "R16",
    question: "What is Redux?",
    answer: `<p>Redux is a state management library for JavaScript applications. It is commonly used with React to manage the application's state in a single, immutable store.</p>`,
  },
  {
    id: "R17",
    question: "What is the use of the useReducer hook?",
    answer: `<p>Alternative to useState for managing more complex state logic. It accepts a reducer function and an initial state, returning the current state and a dispatch function to trigger state updates.</p>

    <p>(A reducer function takes two arguments: the current state and an action.)</p>`,
  },
  {
    id: "R18",
    question: "What is the difference between useMemo and useCallback?",
    answer: `<p>useMemo memoizes a value to prevent expensive calculations on every render. useCallback memoizes a function to prevent unnecessary re-creations. Both help optimize performance.</p>`,
  },
  {
    id: "R19",
    question: "What is the purpose of useRef?",
    answer: `<p>useRef is a hook that returns a mutable ref object. It can hold a reference to a DOM node or any mutable value that persists across renders.</p>`,
  },
  {
    id: "R20",
    question: "How do you optimize component re-renders?",
    answer: `<p>Component re-renders can be optimized using techniques such as memoization with React.memo, useMemo, and useCallback, avoiding state mutations, and using shouldComponentUpdate or React.PureComponent.</p>`,
  },
  {
    id: "R21",
    question: "What is the use of React.forwardRef?",
    answer: `<p>React.forwardRef is a function that allows you to forward refs to child components. It is useful for accessing the ref of a DOM element or a component in a parent component.</p>`,
  },
  {
    id: "R22",
    question: "How do you manage global state in React?",
    answer: `<p>Global state in React can be managed using state management libraries like Redux, MobX, or the Context API. These tools help share state across multiple components.</p>`,
  },
  {
    id: "R23",
    question: "What is the purpose of React's Concurrent Mode?",
    answer: `<p>Concurrent Mode is an experimental feature in React that helps build more responsive applications. It allows React to interrupt long-running renders to handle more urgent updates, improving the user experience.</p>`,
  },
  {
    id: "R24",
    question: "How do you handle forms in React?",
    answer: `<p>Forms in React can be handled using controlled or uncontrolled components. Controlled components manage form data via state, while uncontrolled components use refs to access form values from the DOM.</p>`,
  },
  {
    id: "R25",
    question: "What is the use of React.StrictMode?",
    answer: `<p>React.StrictMode is a development tool that helps identify potential problems in an application. It activates additional checks and warnings for its descendants.</p>`,
  },
  {
    id: "R26",
    question: "How do you handle asynchronous operations in React?",
    answer: `<p>Asynchronous operations in React can be handled using JavaScript promises, async/await syntax, and side effect management libraries like Redux Thunk or Redux Saga.</p>`,
  },
  {
    id: "R27",
    question: "What is the use of React DevTools?",
    answer: `<p>React DevTools is a browser extension that helps developers inspect the React component tree, view component props and state, and analyze performance.</p>`,
  },
  {
    id: "R28",
    question:
      "What is the difference between a stateful and a stateless component?",
    answer: `<p>Stateful components manage their own state and can change over time, whereas stateless components do not manage state and rely solely on props for data.</p>`,
  },
  {
    id: "R29",
    question: "How do you implement routing in a React application?",
    answer: `<p>Routing in a React application can be implemented using React Router. It provides components like BrowserRouter, Route, Link, and Switch to handle navigation and rendering of different views.</p>`,
  },
  {
    id: "R30",
    question: "What is the use of React.createContext?",
    answer: `<p>React.createContext is a function that creates a Context object. It is used to pass data through the component tree without having to pass props down manually at every level.</p>`,
  },
  {
    id: "R31",
    question: "How do you handle side effects in React?",
    answer: `<p>Side effects in React can be handled using the useEffect hook in functional components and lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components.</p>`,
  },
  {
    id: "R32",
    question:
      "What is the difference between React's useEffect and useLayoutEffect hooks?",
    answer: `<p>useEffect runs asynchronously and after the DOM has been updated. useLayoutEffect runs synchronously and immediately after React has performed all DOM mutations, allowing you to read layout from the DOM and synchronously re-render.</p>`,
  },
  {
    id: "R33",
    question: "What are synthetic events in React?",
    answer: `<p>Synthetic events are objects that wrap around the native events provided by the browser. They ensure that events have consistent properties across different browsers.</p>`,
  },
  {
    id: "R34",
    question: "What is the difference between state and props?",
    answer: `<p>State is a local data storage that is mutable and managed within the component. Props are read-only attributes passed from parent to child components and cannot be modified by the child.</p>`,
  },
  {
    id: "R35",
    question: "What are pure components in React?",
    answer: `<p>Pure components in React are components that only re-render when their props or state change.</p><p>It minds its own business. It should not change any objects or variables that existed before rendering.</p>
    <p>Same inputs, same output. Given the same inputs, a component should always return the same JSX.</p>
    <p>React.memo:</p>

    <ul>
    <li>Pure function components are regular function components that only re-render when their props change.</li>
    <li>You can use the React.memo function to memorize a function component and optimize its rendering.</li>
    <li>React.memo performs a shallow comparison of the component’s props to determine if a re-render is necessary.</li>
    </ul>
    
    <p>Pure functions only perform a calculation and nothing more. It makes your code easier to understand, debug, and allows React to automatically optimize your components and hooks correctly.</p>`,
  },
  {
    id: "R36",
    question: "What is the use of React.Fragment?",
    answer: `<p>React.Fragment allows you to group multiple elements without adding an extra node to the DOM. It is useful for returning multiple elements from a component's render method.</p>`,
  },
  {
    id: "R37",
    question: "How do you handle conditional rendering in React?",
    answer: `<p>Conditional rendering in React allows you to display different content or components based on certain conditions. you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators. If statements, logical && operator, switch statements or variables and functions inside JSX.</p>`,
  },
  {
    id: "R38",
    question: "What is the purpose of useDebugValue?",
    answer: `<p>useDebugValue is a hook that displays a label in React DevTools for custom hooks. It helps to debug custom hooks by providing information about the hook’s state.</p>`,
  },
  {
    id: "R39",
    question: "What is the use of useCallback?",
    answer: `<p>The useCallback hook is used to memoize callbacks. It takes a callback function and an array of dependencies and returns a memoized callback. This is beneficial in scenarios where passing callbacks to child components might cause unnecessary re-renders.</p>`,
  },
  {
    id: "R40",
    question: "How do you manage state in a React application?",
    answer: `<p>State in a React application can be managed using React's useState hook for local state, and state management libraries like Redux, MobX, or the Context API for global state.</p>`,
  },
  {
    id: "R41",
    question: "How do you handle errors in React components?",
    answer: `<p>1. Try/Catch in Event Handlers: Use try/catch blocks within event handlers to handle exceptions that occur during events.</p>
    <p>2. Error State in Hooks: Manage error state using the useState hook and catch errors in asynchronous operations within useEffect.</p>
    <p>3. PropTypes: Validate prop types using PropTypes to prevent errors related to incorrect props.</p>
    <p>4. Strict Mode: Utilize React’s StrictMode in development to identify potential problems in components.</p>
    <p>5. Error Boundaries: Wrap components with a class component that implements componentDidCatch() or static getDerivedStateFromError() to catch errors in the component tree and display a fallback UI.</p>`,
  },
  {
    id: "R42",
    question: "How do you handle events in React?",
    answer: `<p>Events in React are handled similarly to DOM events but with some syntax differences. You can pass event handlers as props and use the camelCase naming convention for event names.</p>`,
  },
  {
    id: "R43",
    question: "What is the use of the React.memo function?",
    answer: `<p>React.memo is a higher-order component that memoizes a component to prevent unnecessary re-renders. It does a shallow comparison of the component’s props and only re-renders if they have changed.</p>`,
  },
  {
    id: "R44",
    question: "What is the use of useEffect in React?",
    answer: `<p>useEffect is a hook used to perform side effects in functional components. It can replace lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.</p>`,
  },
  {
    id: "R45",
    question:
      "What is the difference between a stateful and a stateless component?",
    answer: `<p>Stateful components manage their own state and can change over time, whereas stateless components do not manage state and rely solely on props for data.</p>`,
  },
  {
    id: "R46",
    question: "What are Side effects in React?",
    answer: `<p>Side effects are actions performed in a component that are not directly related to rendering the user interface. Common side effects include fetching data, subscribing to events, manipulating the DOM, and setting up timers.</p>`,
  },
  {
    id: "R47",
    question: "What is useContext hook in React?",
    answer: `<p>Allows you to consume context in functional components. It accepts a context object (created with React.createContext) and returns the current context value for that context.</p>`,
  },
  {
    id: "R48",
    question: "What is useMemo hook in React?",
    answer: `<p>The useMemo hook is used to memoize the result of a function. It takes a function and an array of dependencies and returns a memoized value. This is particularly useful when you have expensive computations or calculations that you want to avoid repeating unnecessarily.</p>`,
  },
  {
    id: "R49",
    question: "What is custom Hooks in Reactjs?",
    answer: `<p>Custom hooks in React.js are functions that allow you to extract component logic into reusable functions. They are a way to share logic between components without having to duplicate code or rely on higher-order components or render props.</p>`,
  },
  {
    id: "R50",
    question: "How the Virtual DOM works in React?",
    answer: `<p>React update the state changes in Virtual DOM first and then it syncs with Real DOM. Virtual DOM is just like a blueprint of a machine, can do changes in the blueprint but those changes will not directly apply to the machine.</p>

    <ul>
    <li>React creates a lightweight copy of the actual HTML DOM called the Virtual DOM.</li>
    <li>When a component is rendered, React creates a corresponding Virtual DOM representation in memory.</li>
    <li>When state or props change, React creates a new Virtual DOM representation.</li>
    <li>React compares the new Virtual DOM with the previous one to determine the differences or updates that need to be made.</li>
    <li>By identifying the minimal set of changes, React optimizes performance by minimizing unnecessary updates to the actual DOM.</li>
    <li>React updates the real DOM with the minimal modifications required to reflect the new Virtual DOM.</li>
    </ul>`,
  },
  {
    id: "R51",
    question: "What are controlled components and uncontrolled components?",
    answer: `<p>Controlled (via props), and which information should be uncontrolled (via state).</p>

    <p>Controlled Components:</p>
    <li>State is managed by React through props.</li>
    <li>Values and changes are handled through props and event handlers.</li>
    <li>Provides a single source of truth.</li>
    <li>Examples: input fields, checkboxes, select dropdowns.</li>

    <p>Uncontrolled Components:</p>
    <li>State is managed internally by the DOM.</li>
    <li>Values and changes are accessed directly from the DOM using techniques like "ref".</li>
    <li>Offers more flexibility and direct access to the DOM.</li>
    <li>Examples: file inputs, certain form fields.</li>`,
  },
  {
    id: "R52",
    question: "What is the callback function?",
    answer: `<p>A callback function is a function that is passed as an argument to another function and is intended to be called or executed at a later point in time. It allows for communication between different components in React.</p>
    <ul>
    <li>Used as event handlers to respond to user interactions.</li>
    <li>They enable communication between parent and child components.</li>
    <li>Handle the results of asynchronous operations.</li>
    <li>Conditional rendering of components or elements.</li>
    </ul>`,
  },
  {
    id: "R53",
    question: "How to pass state data from one component to another component?",
    answer: `<p>Passing state data from one component to another in React can be done in several ways, depending on the relationship between the components.</p>
    <p><b>Parent to Child (via props)</b></p>
    <p>A parent component can pass its state down to its children as properties, commonly referred to as “props”.</p>

    <p><b>Child to Parent (via callback functions)</b></p>
    <p>When two components are siblings and they need to share state, you can’t pass the data directly between them. Instead, you lift the state up to their closest common ancestor, which then manages the state and passes it down to both siblings.</p>

    <p><b>Sibling to Sibling</b></p>
    <p>When two components are siblings and they need to share state, you can’t pass the data directly between them. Instead, you lift the state up to their closest common ancestor, which then manages the state and passes it down to both siblings.</p>

    <p><b>Using Context API</b></p>
    <p>React’s Context API allows you to share values like state between components without having to explicitly pass a prop through every level of the tree.</p>

    <p><b>Using State Management Libraries</b></p>
    `,
  },
  {
    id: "R54",
    question: "What is the Prop drilling in reactjs?",
    answer: `<p>Prop drilling is a term used in React to describe the process of passing data from a part of a component tree to another part by going through other components that do not necessarily need the data, but only pass it down the tree.</p>

    <p>To avoid prop drilling, you can use React’s Context API or state management libraries like Redux which allow you to access the state from anywhere in your component tree without having to pass it down through every level.</p>`,
  },
  {
    id: "R55",
    question: "What is the Prop drilling in reactjs?",
    answer: `<p>Prop drilling occurs when a prop needs to be passed through several layers of nested components to reach a deeply nested child component that actually needs the prop. Each intermediary component in the hierarchy has to pass the prop down, even if it doesn't use the prop itself.</p>`,
  },
  {
    id: "R56",
    question: "What are the Event Handlers in React?",
    answer: `<p>Event handlers are your own functions that is called when an event occurs. Event handlers are typically defined as props on React components. (To handle an event in React)</p>
    <ul>
    <li>You can handle events by passing a function as a prop to an element like <button>.</li>
    <li>Event handlers are defined inside a component, so they can access props.</li>
    <li>You can declare an event handler in a parent and pass it as a prop to a child.</li>
    </ul>`,
  },
  {
    id: "R57",
    question: "How to optimize the performance of React app?",
    answer: `<ul>
    <li>1. Code Splitting: Split your code into smaller chunks using tools like Webpack or React.lazy() to load only what is necessary for each page or component.</li>
<li>2. Bundle Size Reduction: Minify and compress JavaScript and CSS to reduce the overall bundle size. Webpack or Babel can help achieve this.</li>
<li>3. Lazy Loading: Load components and resources only when they are needed, improving initial load time and reducing data transferred.</li>
<li>4. Image Optimization: Compress and optimize images to reduce their file size. Tools like ImageOptim or Webpack plugins can assist with this.</li>
<li>5. Memoization: Use React’s "memo" or "PureComponent" to memoize components and prevent unnecessary re-renders when props or state haven’t changed.</li>
<li>6. Virtualization: For long lists, use libraries like "react-virtualized" or "react-window" to render only the visible items, improving performance.</li>
<li>7. Avoid Unnecessary Renders: Implement "React.memo" to prevent unnecessary re-renders of components when props haven’t changed.</li>
<li>8. Code Profiling: Use tools like React DevTools or Chrome DevTools to identify performance bottlenecks, analyze component render times, and identify slow components.</li>
<li>9. Server-Side Rendering (SSR): Implement SSR to pre-render React components on the server, reducing initial load time and improving SEO.</li>
<li>10. Caching: Utilize caching mechanisms like HTTP caching or memoization to avoid redundant network requests or calculations.</li>
<li>11. Optimize Network Requests: Minimize HTTP requests by combining and compressing resources, using techniques like HTTP/2 or lazy loading.</li>
<li>12. Code Optimization: Optimize your code by removing unused dependencies, reducing unnecessary calculations, and avoiding unnecessary DOM manipulations.</li>
<li>13. Performance Monitoring: Continuously monitor your app’s performance using tools like Lighthouse, WebPageTest, or New Relic to identify areas for improvement.</li>`,
  },
  {
    id: "R58",
    question: "Can web browsers read JSX directly?",
    answer: `<p>Web browsers cannot read JSX directly. This is because they are built to only read regular JS objects and JSX is not a regular JavaScript object </p>
    <p>For a web browser to read a JSX file, the file needs to be transformed into a regular JavaScript object. For this, we use Babel</p>`,
  },
  {
    id: "R59",
    question: "What is the difference between the ES6 and ES5 standards?",
    answer: `<p>exports vs export</p>
    <p>require vs import</p>
    <p>Components and Function</p>`,
  },
  {
    id: "R60",
    question: "How do you write comments in React?",
    answer: `<p>Single-line comments ( // )</p>
    <p>Multi-line comments ( /* */ )</p>
     <p>Multi-line comments in JSX( {/* */} )</p>`,
  },
  {
    id: "R61",
    question: "What is an arrow function and how is it used in React?",
    answer: `<p>An arrow function is a short way of writing a function to React.</p>
    <p>It is unnecessary to bind ‘this’ inside the constructor when using an arrow function. This prevents bugs caused by the use of ‘this’ in React callbacks.</p>`,
  },
  {
    id: "R62",
    question: "What are the components in React?",
    answer: `<p>Components are the building blocks of any React application, and a single app usually consists of multiple components. A component is essentially a piece of the user interface. It splits the user interface into independent, reusable parts that can be processed separately. We have two types of components in React: stateless and stateful</p>`,
  },
  {
    id: "R63",
    question: "What is the use of render() in React?",
    answer: `<p>It is required for each component to have a render() function. This function returns the HTML, which is to be displayed in the component.</p>`,
  },
  {
    id: "R64",
    question: "Explain what is prop types and how to use it?",
    answer: `<p>It is used as a validator to ensure the data your component receives is valid. PropTypes serves as the method you can use to ensure the correct datatype is passed for each prop, meaning whatever is rendered is correct. It can also be used to ensure a value is passed, set default values, and lots more. Since React v15.5 prop types has to be installed as npm package. Once installed, propTypes has to be imported into the component we want tu use it. Attach the component name to the PropTypes method and create an object containing all your prop's validation.</p>`,
  },
  {
    id: "R65",
    question: "What is JSX/.TSX and how it is related to JS?",
    answer: `<p>JSX is a syntax extension for JavaScript that allows developers to write HTML-like syntax in their JavaScript code. It is used in React to create UI components. JSX is not a separate language, but a syntax extension that can be transformed into regular JavaScript by a transpiler. The resulting code is then executed in the browser. JSX allows developers to write code that looks like HTML but is actually JavaScript. This makes it easier to read and write complex UI components.</p>
    
    <p>TSX is a syntax extension for TypeScript that combines JSX syntax with TypeScript's type system. It allows developers to write type-checked code with the benefits of JSX syntax. TSX is not a separate language, but a syntax extension that can be compiled into regular JavaScript by a TypeScript compiler.</p>`,
  },
  {
    id: "R66",
    question: "What is the reason for uncontrolled and controlled components?",
    answer: `<p>By controlling form elements via state, you gain more control over user interactions and can easily enforce validation, format data, and respond to changes.</p>
    
    <p>Uncontrolled components in React manage their own state internally rather than relying on React state. This approach is useful for simple forms where you don't need to manipulate the input data through React state updates.</p>`,
  },
  {
    id: "R67",
    question: "Describe component lifecycle in details.",
    answer: `<p>A React component has three different phases in its lifecycle, including mounting, updating, and unmounting. Each phase has its own methods which are responsible for a particular stage in a component’s lifecycle. These methods are for class-based components, functional component has their own life cycle methods.</p>
    
    <p><b>Mounting Phase</b><p>
    <p>The mounting phase is when a new component is created and it is inserted into the DOM or, in simple words, when the actual life of a React component begins. This happens once, and is often called “initial render.” To get through this phase, four lifecycle methods are called: constructor, static getDerivedStateFromProps, render, and componentDidMount.</p>

    <p><b>Updating phase</b><p>
    <p>The updating phase is when the component has any updates or it re-renders. This phase is triggered when the props or state are updated.</p>
    <p>It can also be triggered when a component consists of the following methods: static getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), and componentDidUpdate().</p>

    <p><b>Unmounting phase</b><p>
    <p>The unmounting phase is the last stage in the lifecycle of a React component. This phase refers to when a component is removed from the DOM and is no longer rendered or accessible. During this phase, React performs a series of cleanup operations to ensure that the component and its associated resources are properly cleared of the DOM tree.</p>

    <p>This can happen for various reasons, such as when the component is no longer needed, the parent component is re-rendered without including the child component, or when the application is navigating to a different page or view. It has only one method. </p>

    <p>The componentWillUnmount() lifecycle method componentWillUnmount() method is called just before the component is removed from the DOM. It allows you to perform any necessary cleanup, such as canceling timers, removing event listeners, or clearing any data structures that were set up during the mounting phase. All of the component’s state and props are destroyed..</p>

    `,
  },
];
