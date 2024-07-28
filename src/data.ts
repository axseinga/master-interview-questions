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
    answer: `<p>JSX stands for JavaScript XML. It allows us to write HTML in React. JSX makes it easier to write and add HTML in React.</p>`,
  },
  {
    id: "R3",
    question: "What is the Virtual DOM?",
    answer: `<p>The Virtual DOM is a lightweight copy of the actual DOM. It is a JavaScript object which React keeps in memory to manage its state.</p>`,
  },
  {
    id: "R4",
    question: "What are props in React?",
    answer: `<p>Props are short for properties. They are read-only attributes in a React component that are used to pass data from one component to another.</p>`,
  },
  {
    id: "R5",
    question: "What is state in React?",
    answer: `<p>The state is an object that represents the parts of the app that can change. Each component can have its own state, and it is managed within the component.</p>`,
  },
  {
    id: "R6",
    question: "What are React hooks?",
    answer: `<p>React hooks are functions that let you use state and other React features without writing a class. Examples include useState, useEffect, useContext, and more.</p>`,
  },
  {
    id: "R7",
    question: "What is useState in React?",
    answer: `<p>useState is a Hook that allows you to add state to a functional component. It returns an array with two elements: the current state and a function to update it.</p>`,
  },
  {
    id: "R8",
    question: "What is useEffect in React?",
    answer: `<p>useEffect is a Hook that allows you to perform side effects in function components. It is similar to lifecycle methods in class components such as componentDidMount, componentDidUpdate, and componentWillUnmount.</p>`,
  },
  {
    id: "R9",
    question: "How do you create a React app?",
    answer: `<p>You can create a React app using the Create React App toolchain. Run the command <code>npx create-react-app my-app</code> in your terminal.</p>`,
  },
  {
    id: "R10",
    question: "What is the purpose of keys in React?",
    answer: `<p>Keys help React identify which items have changed, are added, or are removed. They should be given to elements inside an array to give the elements a stable identity.</p>`,
  },
  {
    id: "R11",
    question:
      "What is the difference between a class component and a functional component?",
    answer: `<p>Class components are ES6 classes that extend from React.Component and can have state and lifecycle methods. Functional components are functions that accept props and return JSX, and can use hooks to manage state and lifecycle methods.</p>`,
  },
  {
    id: "R12",
    question: "How do you pass data between React components?",
    answer: `<p>Data can be passed between React components using props. Props can be passed from parent to child components. For passing data between siblings or other relations, you can use state management libraries or context.</p>`,
  },
  {
    id: "R13",
    question: "What is the context API?",
    answer: `<p>The Context API is a way to create global variables that can be passed around in a React app. It is used to share data that can be considered “global” for a tree of React components.</p>`,
  },
  {
    id: "R14",
    question: "What are higher-order components (HOC)?",
    answer: `<p>Higher-order components are functions that take a component and return a new component. They are used to enhance the functionality of existing components.</p>`,
  },
  {
    id: "R15",
    question: "What is Redux?",
    answer: `<p>Redux is a state management library for JavaScript apps. It helps you manage the state of your application in a predictable way.</p>`,
  },
  {
    id: "R16",
    question: "What is the difference between Redux and Context API?",
    answer: `<p>Redux is a state management library that provides a store, actions, and reducers. The Context API is a feature in React that allows you to share state across the component tree without passing props manually. Redux is more powerful and complex, whereas Context API is simpler and built into React.</p>`,
  },
  {
    id: "R17",
    question: "What are React fragments?",
    answer: `<p>React fragments let you group a list of children without adding extra nodes to the DOM. They are used when you want to return multiple elements from a component.</p>`,
  },
  {
    id: "R18",
    question: "What is the use of refs in React?",
    answer: `<p>Refs provide a way to access DOM nodes or React elements created in the render method. They are used when you need to interact with the DOM directly.</p>`,
  },
  {
    id: "R19",
    question: "How do you handle events in React?",
    answer: `<p>Events in React are handled similarly to DOM events but with some syntax differences. You can pass event handlers as props and use the camelCase naming convention for event names.</p>`,
  },
  {
    id: "R20",
    question: "What is a controlled component?",
    answer: `<p>A controlled component is a component that renders form elements and controls them by keeping the form data in the component’s state.</p>`,
  },
  {
    id: "R21",
    question: "What is an uncontrolled component?",
    answer: `<p>An uncontrolled component is a component that renders form elements and controls them using the DOM instead of keeping the form data in the component’s state.</p>`,
  },
  {
    id: "R22",
    question: "What are synthetic events in React?",
    answer: `<p>Synthetic events are objects that wrap around the browser’s native event system. They combine the behavior of different browsers into a single API.</p>`,
  },
  {
    id: "R23",
    question: "What is the difference between state and props?",
    answer: `<p>State is a data structure that starts with a default value when a component mounts and may change over time. Props are inputs to components that are passed down from parent to child components and are immutable.</p>`,
  },
  {
    id: "R24",
    question: "What is PropTypes in React?",
    answer: `<p>PropTypes are a way to validate the props being passed to a component. They help in catching bugs by ensuring that components receive props of the correct type.</p>`,
  },
  {
    id: "R25",
    question: "How do you fetch data in React?",
    answer: `<p>Data in React can be fetched using various methods such as fetch API, Axios, or other HTTP libraries. The fetching is usually done in a lifecycle method or a hook like useEffect.</p>`,
  },
  {
    id: "R26",
    question: "What is React Router?",
    answer: `<p>React Router is a standard library for routing in React. It enables navigation among views or components, allowing for a multi-page experience in a single-page application.</p>`,
  },
  {
    id: "R27",
    question: "What are lazy loading and code splitting in React?",
    answer: `<p>Lazy loading is a technique that delays the loading of code until it is needed. Code splitting is a feature that helps reduce the size of the bundle by splitting the code into smaller chunks that can be loaded on demand.</p>`,
  },
  {
    id: "R28",
    question: "What is the useMemo hook?",
    answer: `<p>useMemo is a hook that memoizes a value so that it is only recalculated when one of its dependencies changes. It helps to optimize performance by preventing unnecessary re-renders.</p>`,
  },
  {
    id: "R29",
    question: "What is the useCallback hook?",
    answer: `<p>useCallback is a hook that returns a memoized callback function. It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.</p>`,
  },
  {
    id: "R30",
    question: "What is the useRef hook?",
    answer: `<p>useRef is a hook that returns a mutable ref object whose current property is initialized to the passed argument. It can hold a reference to a DOM node or any mutable value that persists across renders.</p>`,
  },
  {
    id: "R31",
    question: "How do you handle forms in React?",
    answer: `<p>Forms in React can be handled using controlled or uncontrolled components. Controlled components manage form data via state, while uncontrolled components use refs to access form values from the DOM.</p>`,
  },
  {
    id: "R32",
    question: "What is the difference between useEffect and componentDidMount?",
    answer: `<p>componentDidMount is a lifecycle method in class components that runs after the component mounts. useEffect is a hook in functional components that runs after the render, and can also handle component update and unmount phases.</p>`,
  },
  {
    id: "R33",
    question: "How do you optimize React app performance?",
    answer: `<p>Performance in a React app can be optimized using techniques such as code splitting, lazy loading, memoization, avoiding unnecessary re-renders, and optimizing component updates.</p>`,
  },
  {
    id: "R34",
    question: "What is the difference between React and React Native?",
    answer: `<p>React is a library for building web applications, whereas React Native is a framework for building mobile applications using React. React Native uses native components instead of web components.</p>`,
  },
  {
    id: "R35",
    question: "What are portals in React?",
    answer: `<p>Portals provide a way to render children into a DOM node that exists outside the hierarchy of the parent component. They are useful for rendering elements that need to break out of their parent containers.</p>`,
  },
  {
    id: "R36",
    question:
      "What is the difference between super() and super(props) in React?",
    answer: `<p>super() is used to call the constructor of the parent class. super(props) passes props to the parent class constructor, enabling access to this.props in the constructor.</p>`,
  },
  {
    id: "R37",
    question: "What are controlled and uncontrolled inputs?",
    answer: `<p>Controlled inputs are input elements that are controlled by React state. Uncontrolled inputs are managed by the DOM and accessed using refs.</p>`,
  },
  {
    id: "R38",
    question: "What is the significance of keys in React?",
    answer: `<p>Keys help React identify which items have changed, are added, or are removed. They are crucial for efficient updates and should be unique among siblings.</p>`,
  },
  {
    id: "R39",
    question: "What is server-side rendering (SSR)?",
    answer: `<p>Server-side rendering (SSR) is a technique where the HTML for a web page is generated on the server and sent to the client. It improves performance and SEO by delivering fully rendered pages to the client.</p>`,
  },
  {
    id: "R40",
    question: "What is hydration in React?",
    answer: `<p>Hydration is the process of attaching event listeners to the server-rendered HTML. It allows React to take over the server-rendered HTML and make it interactive.</p>`,
  },
  {
    id: "R41",
    question: "What are error boundaries in React?",
    answer: `<p>Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log the error, and display a fallback UI instead of crashing the entire component tree.</p>`,
  },
  {
    id: "R42",
    question: "How do you test React components?",
    answer: `<p>React components can be tested using various testing libraries such as Jest, Enzyme, and React Testing Library. These libraries provide tools to render components and simulate user interactions.</p>`,
  },
  {
    id: "R43",
    question:
      "What is the difference between shallow rendering and full rendering in testing?",
    answer: `<p>Shallow rendering tests a component in isolation without rendering its children. Full rendering tests a component and all its children, providing a more complete test.</p>`,
  },
  {
    id: "R44",
    question: "What is the use of the useReducer hook?",
    answer: `<p>useReducer is a hook that is used for state management in React. It is an alternative to useState and is suitable for managing more complex state logic.</p>`,
  },
  {
    id: "R45",
    question: "What is the significance of React keys?",
    answer: `<p>Keys help React identify which items have changed, are added, or are removed, enhancing performance by allowing React to avoid re-rendering unchanged elements.</p>`,
  },
  {
    id: "R46",
    question: "What is the React Strict Mode?",
    answer: `<p>React Strict Mode is a development tool that helps identify potential problems in an application. It activates additional checks and warnings for its descendants.</p>`,
  },
  {
    id: "R47",
    question: "What are synthetic events?",
    answer: `<p>Synthetic events are cross-browser wrapper objects around the browser’s native event system. They help ensure that events have consistent properties across different browsers.</p>`,
  },
  {
    id: "R48",
    question: "What is reconciliation in React?",
    answer: `<p>Reconciliation is the process by which React updates the DOM to match the React elements. It involves comparing the new and previous elements and updating only the changed parts.</p>`,
  },
  {
    id: "R49",
    question: "How do you conditionally render components in React?",
    answer: `<p>Conditional rendering in React can be done using JavaScript conditional statements like if-else, ternary operators, and logical && operators.</p>`,
  },
  {
    id: "R50",
    question: "What is the purpose of shouldComponentUpdate?",
    answer: `<p>shouldComponentUpdate is a lifecycle method that determines whether a component should re-render. It can be used to optimize performance by preventing unnecessary re-renders.</p>`,
  },
  {
    id: "R51",
    question: "How do you handle errors in React components?",
    answer: `<p>Errors in React components can be handled using error boundaries. Error boundaries are components that catch JavaScript errors anywhere in their child component tree and display a fallback UI instead of crashing.</p>`,
  },
  {
    id: "R52",
    question:
      "What is the difference between component and container in React?",
    answer: `<p>Components are presentational units that describe the UI. Containers are connected components that manage state and dispatch actions. Containers often use Redux or other state management libraries.</p>`,
  },
  {
    id: "R53",
    question: "How do you optimize the performance of a React application?",
    answer: `<p>Performance in a React app can be optimized by techniques such as code splitting, lazy loading, memoization, avoiding unnecessary re-renders, and using React.memo.</p>`,
  },
  {
    id: "R54",
    question: "What is the use of the useContext hook?",
    answer: `<p>useContext is a hook that allows you to access the value of a context object in a functional component. It simplifies the process of consuming context values.</p>`,
  },
  {
    id: "R55",
    question: "What is React.memo?",
    answer: `<p>React.memo is a higher-order component that memoizes a component to prevent unnecessary re-renders. It does a shallow comparison of the component’s props and only re-renders if they have changed.</p>`,
  },
  {
    id: "R56",
    question: "What is the use of useLayoutEffect?",
    answer: `<p>useLayoutEffect is a hook that runs synchronously after all DOM mutations. It is useful for reading layout from the DOM and synchronously re-rendering.</p>`,
  },
  {
    id: "R57",
    question: "How do you handle side effects in React?",
    answer: `<p>Side effects in React can be handled using the useEffect hook in functional components and lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components.</p>`,
  },
  {
    id: "R58",
    question: "What is the purpose of the useImperativeHandle hook?",
    answer: `<p>useImperativeHandle is a hook that customizes the instance value exposed when using refs. It is used to control the behavior of child components when accessed by parent components.</p>`,
  },
  {
    id: "R59",
    question: "What is the difference between useEffect and useLayoutEffect?",
    answer: `<p>useEffect runs asynchronously after rendering, whereas useLayoutEffect runs synchronously after all DOM mutations. useLayoutEffect is useful for reading layout and synchronously re-rendering.</p>`,
  },
  {
    id: "R60",
    question: "What is the purpose of useReducer?",
    answer: `<p>useReducer is a hook used for state management in React. It is suitable for managing more complex state logic compared to useState, allowing you to define state transitions with a reducer function.</p>`,
  },
  {
    id: "R61",
    question: "What is the purpose of useDebugValue?",
    answer: `<p>useDebugValue is a hook that displays a label in React DevTools for custom hooks. It helps to debug custom hooks by providing information about the hook’s state.</p>`,
  },
  {
    id: "R62",
    question: "What is the use of useCallback?",
    answer: `<p>useCallback is a hook that returns a memoized callback function. It is useful for passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.</p>`,
  },
  {
    id: "R63",
    question: "What is the difference between useMemo and useCallback?",
    answer: `<p>useMemo memoizes a value to prevent expensive calculations on every render. useCallback memoizes a function to prevent unnecessary re-creations. Both help optimize performance.</p>`,
  },
  {
    id: "R64",
    question: "What is the purpose of useRef?",
    answer: `<p>useRef is a hook that returns a mutable ref object. It can hold a reference to a DOM node or any mutable value that persists across renders.</p>`,
  },
  {
    id: "R65",
    question: "How do you optimize component re-renders?",
    answer: `<p>Component re-renders can be optimized using techniques such as memoization with React.memo, useMemo, and useCallback, avoiding state mutations, and using shouldComponentUpdate or React.PureComponent.</p>`,
  },
  {
    id: "R66",
    question: "What is the use of React.forwardRef?",
    answer: `<p>React.forwardRef is a function that allows you to forward refs to child components. It is useful for accessing the ref of a DOM element or a component in a parent component.</p>`,
  },
  {
    id: "R67",
    question: "How do you manage global state in React?",
    answer: `<p>Global state in React can be managed using state management libraries like Redux, MobX, or the Context API. These tools help share state across multiple components.</p>`,
  },
  {
    id: "R68",
    question: "What is the purpose of React's Concurrent Mode?",
    answer: `<p>Concurrent Mode is an experimental feature in React that helps build more responsive applications. It allows React to interrupt long-running renders to handle more urgent updates, improving the user experience.</p>`,
  },
  {
    id: "R69",
    question: "How do you handle forms in React?",
    answer: `<p>Forms in React can be handled using controlled or uncontrolled components. Controlled components manage form data via state, while uncontrolled components use refs to access form values from the DOM.</p>`,
  },
  {
    id: "R70",
    question: "What is the use of React.StrictMode?",
    answer: `<p>React.StrictMode is a development tool that helps identify potential problems in an application. It activates additional checks and warnings for its descendants.</p>`,
  },
  {
    id: "R71",
    question: "How do you handle asynchronous operations in React?",
    answer: `<p>Asynchronous operations in React can be handled using JavaScript promises, async/await syntax, and side effect management libraries like Redux Thunk or Redux Saga.</p>`,
  },
  {
    id: "R72",
    question: "What is the use of React DevTools?",
    answer: `<p>React DevTools is a browser extension that helps developers inspect the React component tree, view component props and state, and analyze performance.</p>`,
  },
  {
    id: "R73",
    question:
      "What is the difference between a stateful and a stateless component?",
    answer: `<p>Stateful components manage their own state and can change over time, whereas stateless components do not manage state and rely solely on props for data.</p>`,
  },
  {
    id: "R74",
    question: "How do you implement routing in a React application?",
    answer: `<p>Routing in a React application can be implemented using React Router. It provides components like BrowserRouter, Route, Link, and Switch to handle navigation and rendering of different views.</p>`,
  },
  {
    id: "R75",
    question: "What is the use of React.createContext?",
    answer: `<p>React.createContext is a function that creates a Context object. It is used to pass data through the component tree without having to pass props down manually at every level.</p>`,
  },
  {
    id: "R76",
    question: "How do you handle side effects in React?",
    answer: `<p>Side effects in React can be handled using the useEffect hook in functional components and lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components.</p>`,
  },
  {
    id: "R77",
    question:
      "What is the difference between React's useEffect and useLayoutEffect hooks?",
    answer: `<p>useEffect runs asynchronously after rendering, whereas useLayoutEffect runs synchronously after all DOM mutations. useLayoutEffect is useful for reading layout and synchronously re-rendering.</p>`,
  },
  {
    id: "R78",
    question: "How do you manage state in a React application?",
    answer: `<p>State in a React application can be managed using React's useState hook for local state, and state management libraries like Redux, MobX, or the Context API for global state.</p>`,
  },
  {
    id: "R79",
    question: "What is the use of the useRef hook in React?",
    answer: `<p>useRef is a hook that returns a mutable ref object. It can hold a reference to a DOM node or any mutable value that persists across renders.</p>`,
  },
  {
    id: "R80",
    question: "What are error boundaries in React?",
    answer: `<p>Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log the error, and display a fallback UI instead of crashing the entire component tree.</p>`,
  },
  {
    id: "R81",
    question: "How do you handle events in React?",
    answer: `<p>Events in React are handled similarly to DOM events but with some syntax differences. You can pass event handlers as props and use the camelCase naming convention for event names.</p>`,
  },
  {
    id: "R82",
    question: "What is the use of the React.memo function?",
    answer: `<p>React.memo is a higher-order component that memoizes a component to prevent unnecessary re-renders. It does a shallow comparison of the component’s props and only re-renders if they have changed.</p>`,
  },
  {
    id: "R83",
    question: "How do you optimize React app performance?",
    answer: `<p>Performance in a React app can be optimized using techniques such as code splitting, lazy loading, memoization, avoiding unnecessary re-renders, and optimizing component updates.</p>`,
  },
  {
    id: "R84",
    question: "What is the use of the useImperativeHandle hook?",
    answer: `<p>useImperativeHandle is a hook that customizes the instance value exposed when using refs. It is used to control the behavior of child components when accessed by parent components.</p>`,
  },
  {
    id: "R85",
    question: "How do you fetch data in React?",
    answer: `<p>Data in React can be fetched using various methods such as fetch API, Axios, or other HTTP libraries. The fetching is usually done in a lifecycle method or a hook like useEffect.</p>`,
  },
  {
    id: "R86",
    question: "What is the use of the useReducer hook?",
    answer: `<p>useReducer is a hook used for state management in React. It is suitable for managing more complex state logic compared to useState, allowing you to define state transitions with a reducer function.</p>`,
  },
  {
    id: "R87",
    question: "What is the use of React.forwardRef?",
    answer: `<p>React.forwardRef is a function that allows you to forward refs to child components. It is useful for accessing the ref of a DOM element or a component in a parent component.</p>`,
  },
  {
    id: "R88",
    question: "How do you manage global state in React?",
    answer: `<p>Global state in React can be managed using state management libraries like Redux, MobX, or the Context API. These tools help share state across multiple components.</p>`,
  },
  {
    id: "R89",
    question: "What is the use of React's Concurrent Mode?",
    answer: `<p>Concurrent Mode is an experimental feature in React that helps build more responsive applications. It allows React to interrupt long-running renders to handle more urgent updates, improving the user experience.</p>`,
  },
  {
    id: "R90",
    question: "How do you handle asynchronous operations in React?",
    answer: `<p>Asynchronous operations in React can be handled using JavaScript promises, async/await syntax, and side effect management libraries like Redux Thunk or Redux Saga.</p>`,
  },
  {
    id: "R91",
    question: "What is the use of React DevTools?",
    answer: `<p>React DevTools is a browser extension that helps developers inspect the React component tree, view component props and state, and analyze performance.</p>`,
  },
  {
    id: "R92",
    question:
      "What is the difference between a stateful and a stateless component?",
    answer: `<p>Stateful components manage their own state and can change over time, whereas stateless components do not manage state and rely solely on props for data.</p>`,
  },
  {
    id: "R93",
    question: "How do you implement routing in a React application?",
    answer: `<p>Routing in a React application can be implemented using React Router. It provides components like BrowserRouter, Route, Link, and Switch to handle navigation and rendering of different views.</p>`,
  },
  {
    id: "R94",
    question: "What is the use of React.createContext?",
    answer: `<p>React.createContext is a function that creates a Context object. It is used to pass data through the component tree without having to pass props down manually at every level.</p>`,
  },
  {
    id: "R95",
    question: "What is the purpose of useDebugValue?",
    answer: `<p>useDebugValue is a hook that displays a label in React DevTools for custom hooks. It helps to debug custom hooks by providing information about the hook’s state.</p>`,
  },
  {
    id: "R96",
    question: "What is the use of useCallback?",
    answer: `<p>useCallback is a hook that returns a memoized callback function. It is useful for passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.</p>`,
  },
  {
    id: "R97",
    question: "How do you manage state in a React application?",
    answer: `<p>State in a React application can be managed using React's useState hook for local state, and state management libraries like Redux, MobX, or the Context API for global state.</p>`,
  },
  {
    id: "R98",
    question: "How do you handle asynchronous operations in React?",
    answer: `<p>Asynchronous operations in React can be handled using JavaScript promises, async/await syntax, and side effect management libraries like Redux Thunk or Redux Saga.</p>`,
  },
  {
    id: "R99",
    question: "What is the use of React DevTools?",
    answer: `<p>React DevTools is a browser extension that helps developers inspect the React component tree, view component props and state, and analyze performance.</p>`,
  },
  {
    id: "R100",
    question: "How do you optimize component re-renders?",
    answer: `<p>Component re-renders can be optimized using techniques such as memoization with React.memo, useMemo, and useCallback, avoiding state mutations, and using shouldComponentUpdate or React.PureComponent.</p>`,
  },
  {
    id: "R101",
    question:
      "What is the difference between controlled and uncontrolled components?",
    answer: `<p>Controlled components manage form data via React state, providing a single source of truth. Uncontrolled components use refs to access form values from the DOM, allowing more direct interaction with`,
  },
];

export const jsQuestions = [];

export const otherQuestions = [];