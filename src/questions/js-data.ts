export const jsQuestions = [
  {
    id: "J1",
    question: "What are the different data types present in JavaScript?",
    answer:
      "<p>To know the type of a JavaScript variable, we can use the <code>typeof</code> operator.</p><p><b>Primitive types:</b></p><ul><li><b>String</b> - Represents a series of characters and is written with quotes. A string can be represented using a single or a double quote.</li><li><b>Number</b> - Represents a number and can be written with or without decimals.</li><li><b>BigInt</b> - Used to store numbers which are above the limitation of the Number data type. It can store large integers and is represented by adding “n” to an integer literal.</li><li><b>Boolean</b> - Represents a logical entity and can have only two values: true or false. Booleans are generally used for conditional testing.</li><li><b>Undefined</b> - When a variable is declared but not assigned, it has the value of undefined and its type is also undefined.</li><li><b>Null</b> - Represents a non-existent or an invalid value.</li><li><b>Symbol</b> - A new data type introduced in the ES6 version of JavaScript. It is used to store an anonymous and unique value.</li></ul><p><b>Non-primitive types:</b></p><ul><li>Primitive data types can store only a single value. To store multiple and complex values, non-primitive data types are used.</li><li><b>Object</b> - Used to store a collection of data in key-value pairs.</li><li><b>Array</b> - Collection of data as an ordered list.</li></ul><p>Note: Any data type that is not a primitive data type is of Object type in JavaScript.</p>",
  },
  {
    id: "J2",
    question: "Explain Hoisting in JavaScript.",
    answer:
      "<p>Hoisting is the default behavior of JavaScript where all the variable and function declarations are moved to the top. This means that irrespective of where the variables and functions are declared, they are moved to the top of the scope. The scope can be both local and global.</p>",
  },
  {
    id: "J3",
    question: "Why do we use the word 'debugger' in JavaScript?",
    answer:
      "<p>The debugger for the browser must be activated in order to debug the code. Built-in debuggers may be switched on and off, requiring the user to report faults. The remaining section of the code should stop execution before moving on to the next line while debugging.</p>",
  },
  {
    id: "J4",
    question: "Difference between '==' and '===' operators.",
    answer:
      "<p>Both are comparison operators. The difference between the operators is that <code>==</code> is used to compare values, whereas <code>===</code> is used to compare both values and types.</p>",
  },
  {
    id: "J5",
    question: "Difference between var and let keyword in JavaScript.",
    answer:
      "<p>Some differences are:</p><ul><li>From the very beginning, the <code>var</code> keyword was used in JavaScript programming whereas the keyword <code>let</code> was added in 2015.</li><li>The keyword <code>var</code> has a function scope. Anywhere in the function, the variable specified using var is accessible but in <code>let</code> the scope of a variable declared with the <code>let</code> keyword is limited to the block in which it is declared.</li><li>In ECMAScript 2015, <code>let</code> and <code>const</code> are hoisted but not initialized. Referencing the variable in the block before the variable declaration results in a ReferenceError because the variable is in a 'temporal dead zone' from the start of the block until the declaration is processed.</li></ul>",
  },
  {
    id: "J6",
    question: "Explain Implicit Type Coercion in JavaScript.",
    answer:
      "<p>Implicit type coercion in JavaScript is the automatic conversion of value from one data type to another. It takes place when the operands of an expression are of different data types.</p><p>For example, string coercion takes place while using the ‘+’ operator. When a number is added to a string, the number type is always converted to the string type.</p><p>Boolean coercion takes place when using logical operators, ternary operators, if statements, and loop checks. To understand boolean coercion in if statements and operators, we need to understand truthy and falsy values.</p><p><b>Truthy values:</b> Those which will be converted (coerced) to true.</p><p><b>Falsy values:</b> Those which will be converted to false. All values except false, 0, 0n, -0, “”, null, undefined, and NaN are truthy values.</p><p><b>Logical operators:</b> Logical operators in JavaScript, unlike operators in other programming languages, do not return true or false. They always return one of the operands.</p><ul><li><b>OR (||) operator:</b> If the first value is truthy, then the first value is returned. Otherwise, always the second value gets returned.</li><li><b>AND (&&) operator:</b> If both the values are truthy, always the second value is returned. If the first value is falsy then the first value is returned or if the second value is falsy then the second value is returned.</li></ul><p><b>Equality Coercion:</b> Equality coercion takes place when using ‘==’ operator. The ‘==’ operator compares values and not types. While using the ‘==’ operator, coercion takes place. The ‘==’ operator converts both the operands to the same type and then compares them. Coercion does not take place when using the ‘===’ operator. Both operands are not converted to the same type in the case of ‘===’ operator.</p>",
  },
  {
    id: "J7",
    question:
      "Is JavaScript a statically typed or a dynamically typed language?",
    answer:
      "<p>JavaScript is a dynamically typed language. In a dynamically typed language, the type of a variable is checked during run-time in contrast to a statically typed language, where the type of a variable is checked during compile-time. Since JavaScript is a loosely (dynamically) typed language, variables in JS are not associated with any type. A variable can hold the value of any data type.</p>",
  },
  {
    id: "J8",
    question: "What is NaN property in JavaScript?",
    answer:
      "<p>NaN property represents the “Not-a-Number” value. It indicates a value that is not a legal number. <code>typeof</code> of NaN will return a Number. To check if a value is NaN, we use the <code>isNaN()</code> function.</p><p>Note: <code>isNaN()</code> function converts the given value to a Number type, and then equates to NaN.</p><ul><li><code>isNaN('Hello')</code> // Returns true</li><li><code>isNaN(345)</code> // Returns false</li><li><code>isNaN('1')</code> // Returns false, since '1' is converted to Number type which results in 0 (a number)</li><li><code>isNaN(true)</code> // Returns false, since true converted to Number type results in 1 (a number)</li><li><code>isNaN(false)</code> // Returns false</li><li><code>isNaN(undefined)</code> // Returns true</li></ul>",
  },
  {
    id: "J9",
    question: "Explain passed by value and passed by reference.",
    answer:
      "<p>In JavaScript, primitive data types are passed by value and non-primitive data types are passed by reference.</p><pre><code>var obj = { name: 'Vivek', surname: 'Bisht' };<br>var obj2 = obj;</code></pre><p>In the above example, the assign operator directly passes the location of the variable <code>obj</code> to the variable <code>obj2</code>. In other words, the reference of the variable <code>obj</code> is passed to the variable <code>obj2</code>.</p>",
  },
  {
    id: "J10",
    question: "What is an Immediately Invoked Function in JavaScript?",
    answer:
      "<p>An Immediately Invoked Function (known as IIFE and pronounced as IIFY) is a function that runs as soon as it is defined.</p><p>Syntax of IIFE :</p><pre><code>(function(){<br>  // Do something;<br>})();</code></pre><p>To understand IIFE, we need to understand the two sets of parentheses that are used while creating the IIFE. The first set of parenthesis is used to create a function expression. For creating a function expression, the function definition is enclosed within a set of parenthesis. If this is not done, then the compiler will treat the function as a function declaration, and a function declaration must have a function name. The second set of parenthesis is used to call the function that has been defined immediately.</p>",
  },
  {
    id: "J11",
    question:
      "What do you mean by strict mode in JavaScript and characteristics of JavaScript strict-mode?",
    answer:
      "<p>In ECMAScript 5, a new feature called JavaScript Strict Mode allows you to write code or a function in a 'strict' operational environment. In most cases, this language is 'not particularly severe' when it comes to throwing errors. In 'Strict mode,' however, all forms of errors, including silent errors, will be thrown. As a result, debugging becomes a lot simpler. Thus programmer's chances of making an error are lowered.</p><p><b>Characteristics of strict mode in JavaScript:</b></p><ul><li>Duplicate arguments are not allowed by developers.</li><li>In strict mode, you won't be able to use the JavaScript keyword as a parameter or function name.</li><li>The 'use strict' keyword is used to define strict mode at the start of the script. Strict mode is supported by all browsers.</li><li>Engineers will not be allowed to create global variables in 'Strict Mode.'</li></ul>",
  },
  {
    id: "J12",
    question: "Explain Higher Order Functions in JavaScript.",
    answer:
      "<p>Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.</p><p>Higher-order functions are a result of functions being first-class citizens in JavaScript.</p>",
  },
  {
    id: "J13",
    question: "Explain 'this' keyword.",
    answer:
      "<p>The 'this' keyword refers to the object that the function is a property of.</p><p>The value of the 'this' keyword will always depend on the object that is invoking the function.</p><pre><code>function doSomething() {<br>  console.log(this);<br>}<br>doSomething();</code></pre><p>The function is invoked in the global context, the function is a property of the global object.</p><pre><code>var obj = {<br>  name: 'vivek',<br>  getName: function(){<br>    console.log(this.name);<br>  }<br>}<br>obj.getName();</code></pre><p>In the above code, at the time of invocation, the getName function is a property of the object obj, therefore, this keyword will refer to the object obj, and hence the output will be 'vivek'.</p>",
  },
  {
    id: "J14",
    question: "What do you mean by Self Invoking Functions?",
    answer:
      "<p>Without being requested, a self-invoking expression is automatically invoked (initiated). If a function expression is followed by (), it will execute automatically. A function declaration cannot be invoked by itself.</p><p>Normally, we declare a function and call it, however, anonymous functions may be used to run a function automatically when it is described and will not be called again. There is no name for these kinds of functions.</p>",
  },
  {
    id: "J15",
    question: "Explain call(), apply() and bind() methods.",
    answer:
      "<ul><li><b>call():</b><ul><li>It's a predefined method in JavaScript.</li><li>This method invokes a method (function) by specifying the owner object.</li><li>call() method allows an object to use the method (function) of another object.</li></ul></li><li><b>apply():</b><ul><li>The apply method is similar to the call() method. The only difference is that call() method takes arguments separately whereas, apply() method takes arguments as an array.</li></ul></li><li><b>bind():</b><ul><li>This method returns a new function, where the value of 'this' keyword will be bound to the owner object, which is provided as a parameter.</li></ul></li></ul>",
  },
  {
    id: "J16",
    question:
      "What is the difference between exec() and test() methods in JavaScript?",
    answer:
      "<ul><li><b>test() and exec() are RegExp expression methods used in JavaScript:</b></li><li>We use exec() to search a string for a specific pattern, and if it finds it, it'll return the pattern directly; else, it'll return an 'empty' result.</li><li>We use test() to find a string for a specific pattern. It will return the Boolean value 'true' on finding the given text otherwise, it will return 'false'.</li></ul>",
  },
  {
    id: "J17",
    question: "What is currying in JavaScript?",
    answer:
      "<p>Currying is an advanced technique to transform a function of arguments n, to n functions of one or fewer arguments.</p><p>Example of a curried function:</p><pre><code>function add (a) {<br>  return function(b){<br>    return a + b;<br>  }<br>}<br>add(3)(4);</code></pre><p>For example, if we have a function f(a,b), then the function after currying, will be transformed to f(a)(b).</p><p>By using the currying technique, we do not change the functionality of a function, we just change the way it is invoked.</p><p>Let’s see currying in action:</p><pre><code>function multiply(a,b){<br>  return a * b;<br>}<br>function currying(fn){<br>  return function(a){<br>    return function(b){<br>      return fn(a,b);<br>    }<br>  }<br>}<br>var curriedMultiply = currying(multiply);<br>multiply(4, 3); // Returns 12<br>curriedMultiply(4)(3); // Also returns 12</code></pre><p>As one can see in the code above, we have transformed the function multiply(a,b) to a function curriedMultiply, which takes in one parameter at a time.</p>",
  },
  {
    id: "J18",
    question: "What are some advantages of using External JavaScript?",
    answer:
      "<p>External JavaScript is the JavaScript Code (script) written in a separate file with the extension.js, and then we link that file inside the <code>&lt;head&gt;</code> or <code>&lt;body&gt;</code> element of the HTML file where the code is to be placed.</p><p>Some advantages of external JavaScript are:</p><ul><li>It allows web designers and developers to collaborate on HTML and JavaScript files.</li><li>We can reuse the code.</li><li>Code readability is simple in external JavaScript.</li></ul>",
  },
  {
    id: "J19",
    question: "Explain Scope and Scope Chain in JavaScript.",
    answer:
      "<p>Scope in JS determines the accessibility of variables and functions at various parts of one’s code.</p><p>In general terms, the scope will let us know at a given part of the code, what variables and functions we can or cannot access.</p><p>There are three types of scopes in JS:</p><ul><li><b>Global Scope:</b> Variables or functions declared in the global namespace have global scope, which means all the variables and functions having global scope can be accessed from anywhere inside the code.</li><li><b>Function Scope:</b> Any variables or functions declared inside a function have local/function scope, which means that all the variables and functions declared inside a function can be accessed from within the function and not outside of it.</li><li><b>Block Scope:</b> Block scope is related to the variables declared using <code>let</code> and <code>const</code>. Variables declared with <code>var</code> do not have block scope. Block scope tells us that any variable declared inside a block <code>{ }</code>, can be accessed only inside that block and cannot be accessed outside of it.</li></ul><p><b>Scope Chain:</b> JavaScript engine also uses Scope to find variables. If the JavaScript engine does not find the variable in the local scope, it tries to check for the variable in the outer scope. If the variable does not exist in the outer scope, it tries to find the variable in the global scope.</p>",
  },
  {
    id: "J20",
    question: "Explain Closures in JavaScript.",
    answer:
      '<p>Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.</p><pre><code>var Person = function(pName){\n  var name = pName;\n\n  this.getName = function(){\n    return name;\n  }\n}\n\nvar person = new Person("Neelesh");\nconsole.log(person.getName());</code></pre><p>Let’s understand closures by example:</p><pre><code>function randomFunc(){\n  var obj1 = {name:"Vivian", age:45};\n\n  return function(){\n    console.log(obj1.name + " is " + "awesome"); // Has access to obj1 even when the randomFunc function is executed\n  }\n}\n\nvar initialiseClosure = randomFunc(); // Returns a function\n\ninitialiseClosure();</code></pre><p>Let’s understand the code above,</p><p>The function <code>randomFunc()</code> gets executed and returns a function when we assign it to a variable:</p><pre><code>var initialiseClosure = randomFunc();</code></pre><p>The returned function is then executed when we invoke <code>initialiseClosure</code>:</p><pre><code>initialiseClosure();</code></pre><p>The line of code above outputs “Vivian is awesome” and this is possible because of closure.</p><pre><code>console.log(obj1.name + " is " + "awesome");</code></pre><p>When the function <code>randomFunc()</code> runs, it seems that the returning function is using the variable <code>obj1</code> inside it: Therefore <code>randomFunc()</code>, instead of destroying the value of <code>obj1</code> after execution, saves the value in the memory for further reference. This is the reason why the returning function is able to use the variable declared in the outer scope even after the function is already executed.</p><p>This ability of a function to store a variable for further reference even after it is executed is called Closure.</p>',
  },
  {
    id: "J21",
    question: "What are object prototypes?",
    answer:
      "<p>All javascript objects inherit properties from a prototype. For example:</p><ul><li>Date objects inherit properties from the Date prototype</li><li>Math objects inherit properties from the Math prototype</li><li>Array objects inherit properties from the Array prototype</li><li>On top of the chain is Object.prototype. Every prototype inherits properties and methods from the Object.prototype.</li><li>A prototype is a blueprint of an object. The prototype allows us to use properties and methods on an object even if the properties and methods do not exist on the current object.</li></ul>",
  },
  {
    id: "J22",
    question: "What are callbacks?",
    answer:
      "<p>A callback is a function that will be executed after another function gets executed. In javascript, functions are treated as first-class citizens, they can be used as an argument of another function, can be returned by another function, and can be used as a property of an object.</p>",
  },
  {
    id: "J23",
    question: "What are the types of errors in javascript?",
    answer:
      "<p>There are two types of errors in javascript:</p><ul><li><strong>Syntax error:</strong> Syntax errors are mistakes or spelling problems in the code that cause the program to not execute at all or to stop running halfway through. Error messages are usually supplied as well.</li><li><strong>Logical error:</strong> Reasoning mistakes occur when the syntax is proper but the logic or program is incorrect. The application executes without problems in this case. However, the output findings are inaccurate. These are sometimes more difficult to correct than syntax issues since these applications do not display error signals for logic faults.</li></ul>",
  },
  {
    id: "J24",
    question: "What is memoization?",
    answer:
      "<p>Memoization is a form of caching where the return value of a function is cached based on its parameters. If the parameter of that function is not changed, the cached version of the function is returned.</p>",
  },
  {
    id: "J25",
    question: "What is recursion in a programming language?",
    answer:
      "<p>Recursion is a technique to iterate over an operation by having a function call itself repeatedly until it arrives at a result.</p>",
  },
  {
    id: "J26",
    question: "What is the use of a constructor function in javascript?",
    answer:
      "<p>Constructor functions are used to create objects in javascript. We use constructor functions if we want to create multiple objects having similar properties and methods, constructor functions are used.</p><p><strong>Note:</strong> The name of a constructor function should always be written in Pascal Notation: every word should start with a capital letter.</p>",
  },
  {
    id: "J27",
    question: "What is DOM?",
    answer:
      "<ul><li><strong>DOM</strong> stands for Document Object Model. DOM is a programming interface for HTML and XML documents.</li><li>When the browser tries to render an HTML document, it creates an object based on the HTML document called DOM. Using this DOM, we can manipulate or change various elements inside the HTML document.</li></ul>",
  },
  {
    id: "J28",
    question:
      "Which method is used to retrieve a character from a certain index?",
    answer:
      "<p>The <strong>charAt()</strong> function of the JavaScript string finds a char element at the supplied index. The index number begins at 0 and continues up to n-1, Here n is the string length. The index value must be positive, higher than, or the same as the string length.</p>",
  },
  {
    id: "J29",
    question: "What do you mean by BOM?",
    answer:
      "<p>Browser Object Model is known as BOM. It allows users to interact with the browser. A browser's initial object is a window. As a result, you may call all of the window's functions directly or by referencing the window. The document, history, screen, navigator, location, and other attributes are available in the window object.</p>",
  },
  {
    id: "J30",
    question:
      "What is the distinction between client-side and server-side JavaScript?",
    answer:
      "<p>Client-side JavaScript is made up of two parts, a fundamental language and predefined objects for performing JavaScript in a browser. JavaScript for the client is automatically included in the HTML pages. At runtime, the browser understands this script.</p><p>Server-side JavaScript involves the execution of JavaScript code on a server in response to client requests. It handles these requests and delivers the relevant response to the client, which may include client-side JavaScript for subsequent execution within the browser.</p>",
  },
  {
    id: "J31",
    question: "What are arrow functions?",
    answer:
      "<p>Arrow functions were introduced in the ES6 version of JavaScript. They provide us with a new and shorter syntax for declaring functions. Arrow functions can only be used as a function expression.</p><p>Arrow functions are declared without the function keyword. If there is only one returning expression then we don’t need to use the return keyword as well in an arrow function. Also, for functions having just one line of code, curly braces { } can be omitted.</p><p>If the function takes in only one argument, then the parenthesis () around the parameter can be omitted.</p><p>The biggest difference between the traditional function expression and the arrow function is the handling of this keyword. By general definition, this keyword always refers to the object that is calling the function.</p><p>In the arrow functions, there is no binding of this keyword. This keyword inside an arrow function does not refer to the object calling it. It rather inherits its value from the parent scope.</p>",
  },
  {
    id: "J32",
    question: "What do mean by prototype design pattern?",
    answer:
      "<p>The Prototype Pattern produces different objects, but instead of returning uninitialized objects, it produces objects that have values replicated from a template – or sample – object. Also known as the Properties pattern, the Prototype pattern is used to create prototypes.</p><p>The introduction of business objects with parameters that match the database's default settings is a good example of where the Prototype pattern comes in handy. The default settings for a newly generated business object are stored in the prototype object.</p><p>The Prototype pattern is hardly used in traditional languages, however, it is used in the development of new objects and templates in JavaScript, which is a prototypal language.</p>",
  },
  {
    id: "J33",
    question:
      "Differences between declaring variables using var, let and const.",
    answer:
      "<p>Before the ES6 version of JavaScript, only the keyword var was used to declare variables. With the ES6 Version, keywords let and const were introduced to declare variables.</p><p><img src='ADD IMG HERE' alt='var let const differences'></p>",
  },
  {
    id: "J34",
    question: "What is the rest parameter and spread operator?",
    answer:
      "<p>Both rest parameter and spread operator were introduced in the ES6 version of JavaScript.</p><p><strong>Rest parameter ( … ):</strong></p><ul><li>It provides an improved way of handling the parameters of a function.</li><li>Using the rest parameter syntax, we can create functions that can take a variable number of arguments.</li><li>Any number of arguments will be converted into an array using the rest parameter.</li><li>It also helps in extracting all or some parts of the arguments.</li><li>Rest parameters can be used by applying three dots (...) before the parameters.</li></ul><p><strong>Spread operator (…):</strong> Although the syntax of the spread operator is exactly the same as the rest parameter, the spread operator is used to spreading an array, and object literals. We also use spread operators where one or more arguments are expected in a function call.</p><p><strong>Note- Key differences between rest parameter and spread operator:</strong></p><ul><li>Rest parameter is used to take a variable number of arguments and turns them into an array while the spread operator takes an array or an object and spreads it.</li><li>Rest parameter is used in function declaration whereas the spread operator is used in function calls.</li></ul>",
  },
  {
    id: "J35",
    question:
      "In JavaScript, how many different methods can you make an object?",
    answer:
      "<p>In JavaScript, there are several ways to declare or construct an object:</p><ul><li>Object.</li><li>Using Class.</li><li>Create Method.</li><li>Object Literals.</li><li>Using Function.</li><li>Object Constructor.</li></ul>",
  },
  {
    id: "J36",
    question: "What is the use of promises in javascript?",
    answer:
      "<p>Promises are used to handle asynchronous operations in JavaScript. Before promises, callbacks were used to handle asynchronous operations. But due to the limited functionality of callbacks, using multiple callbacks to handle asynchronous code can lead to unmanageable code.</p><p>Promise object has four states:</p><ul><li><strong>Pending</strong> - Initial state of promise. This state represents that the promise has neither been fulfilled nor been rejected, it is in the pending state.</li><li><strong>Fulfilled</strong> - This state represents that the promise has been fulfilled, meaning the async operation is completed.</li><li><strong>Rejected</strong> - This state represents that the promise has been rejected for some reason, meaning the async operation has failed.</li><li><strong>Settled</strong> - This state represents that the promise has been either rejected or fulfilled.</li></ul><p>A promise is created using the Promise constructor which takes in a callback function with two parameters, resolve and reject respectively.</p><ul><li><strong>resolve</strong> is a function that will be called when the async operation has been successfully completed.</li><li><strong>reject</strong> is a function that will be called when the async operation fails or if some error occurs.</li></ul><p><strong>then()</strong> method is used to access the result when the promise is fulfilled.</p><p><strong>catch()</strong> method is used to access the result/error when the promise is rejected.</p>",
  },
  {
    id: "J37",
    question: "What are classes in javascript?",
    answer:
      "<p>Introduced in the ES6 version, classes are nothing but syntactic sugars for constructor functions. They provide a new way of declaring constructor functions in JavaScript.</p><p><strong>Key points to remember about classes:</strong></p><ul><li>Unlike functions, classes are not hoisted. A class cannot be used before it is declared.</li><li>A class can inherit properties and methods from other classes by using the extend keyword.</li><li>All the syntaxes inside the class must follow the strict mode(‘use strict’) of JavaScript. An error will be thrown if the strict mode rules are not followed.</li></ul>",
  },
  {
    id: "J38",
    question: "What are generator functions?",
    answer:
      "<p>Introduced in the ES6 version, generator functions are a special class of functions. They can be stopped midway and then continue from where they had stopped.</p><p>Generator functions are declared with the function* keyword instead of the normal function keyword. In normal functions, we use the return keyword to return a value and as soon as the return statement gets executed, the function execution stops. In the case of generator functions, when called, they do not execute the code, instead, they return a generator object. This generator object handles the execution.</p><p>function* genFunc(){<br>&nbsp;&nbsp;yield 3;<br>&nbsp;&nbsp;yield 4;<br>}<br>genFunc(); // Returns Object [Generator] {}</p><p>The generator object consists of a method called next(), this method when called, executes the code until the nearest yield statement, and returns the yield value.</p><p>For example, if we run the next() method on the above code:</p><p>genFunc().next(); // Returns {value: 3, done:false}</p><p>As one can see the next method returns an object consisting of a value and done properties. Value property represents the yielded value. Done property tells us whether the function code is finished or not. (Returns true if finished). Generator functions are used to return iterators.</p>",
  },
  {
    id: "J39",
    question: "Explain WeakSet in javascript.",
    answer:
      "<p>In JavaScript, a Set is a collection of unique and ordered elements. Just like Set, WeakSet is also a collection of unique and ordered elements with some key differences:</p><ul><li>WeakSet contains only objects and no other type.</li><li>An object inside the WeakSet is referenced weakly. This means, that if the object inside the WeakSet does not have a reference, it will be garbage collected.</li><li>Unlike Set, WeakSet only has three methods, add(), delete(), and has().</li></ul>",
  },
  {
    id: "J40",
    question: "Why do we use callbacks?",
    answer:
      '<p>A callback function is a method that is sent as an input to another function (now let us name this other function "thisFunction"), and it is performed inside the thisFunction after the function has completed execution.</p><p>JavaScript is a scripting language that is based on events. Instead of waiting for a reply before continuing, JavaScript will continue to run while monitoring for additional events. Callbacks are a technique of ensuring that a particular code does not run until another code has completed its execution.</p>',
  },
  {
    id: "J41",
    question: "Explain WeakMap in javascript.",
    answer:
      "<p>In JavaScript, Map is used to store key-value pairs. The key-value pairs can be of both primitive and non-primitive types. WeakMap is similar to Map with key differences:</p><ul><li>The keys and values in WeakMap should always be an object.</li><li>If there are no references to the object, the object will be garbage collected.</li></ul><p>const map1 = new Map();<br>map1.set('Value', 1);</p><p>const map2 = new WeakMap();<br>map2.set('Value', 2.3); // Throws an error</p><p>let obj = {name:\"Vivek\"};<br>const map3 = new WeakMap();<br>map3.set(obj, {age:23});</p>",
  },
  {
    id: "J42",
    question: "What is Object Destructuring?",
    answer:
      "<p>Object destructuring is a new way to extract elements from an object or an array.</p><p>const classDetails = {<br>&nbsp;&nbsp;strength: 78,<br>&nbsp;&nbsp;benches: 39,<br>&nbsp;&nbsp;blackBoard:1<br>};</p><p>const {strength:classStrength,benches:classBenches,blackBoard:classBlackBoard} = classDetails;</p><p>console.log(classStrength); // Outputs 78<br>console.log(classBenches); // Outputs 39<br>console.log(classBlackBoard); // Outputs 1</p><p>Using object destructuring we extract all the elements inside an object in one line of code. If we want our new variable to have the same name as the property of an object we can remove the colon.</p>",
  },
  {
    id: "J43",
    question: "Difference between prototypal and classical inheritance?",
    answer:
      "<p>Programmers build objects, which are representations of real-time entities, in traditional OO programming. Classes and objects are the two sorts of abstractions. A class is a generalization of an object, whereas an object is an abstraction of an actual thing. A Vehicle, for example, is a specialization of a Car. As a result, automobiles (class) are descended from vehicles (object).</p><p>Classical inheritance differs from prototypal inheritance in that classical inheritance is confined to classes that inherit from those remaining classes, but prototypal inheritance allows any object to be cloned via an object linking method. Despite going into too many specifics, a prototype essentially serves as a template for those other objects, whether they extend the parent object or not.</p>",
  },
  {
    id: "J44",
    question: "What is a Temporal Dead Zone?",
    answer:
      "<p>Temporal Dead Zone is a behaviour that occurs with variables declared using let and const keywords. It is a behaviour where we try to access a variable before it is initialized.</p>",
  },
  {
    id: "J45",
    question: "What do you mean by JavaScript Design Patterns?",
    answer:
      "<p>JavaScript design patterns are repeatable approaches for errors that arise sometimes when building JavaScript browser applications. They truly assist us in making our code more stable. They are divided mainly into 3 categories:</p><ul><li>Creational Design Pattern</li><li>Structural Design Pattern</li><li>Behavioral Design Pattern</li></ul><p><strong>Creational Design Pattern:</strong> The object generation mechanism is addressed by the JavaScript Creational Design Pattern. They aim to make items that are appropriate for a certain scenario.</p><p><strong>Structural Design Pattern:</strong> The JavaScript Structural Design Pattern explains how the classes and objects we've generated so far can be combined to construct bigger frameworks. This pattern makes it easier to create relationships between items by defining a straightforward way to do so.</p><p><strong>Behavioral Design Pattern:</strong> This design pattern highlights typical patterns of communication between objects in JavaScript. As a result, the communication may be carried out with greater freedom.</p>",
  },
  {
    id: "J46",
    question: "Is JavaScript a pass-by-reference or pass-by-value language?",
    answer:
      "<p>The variable's data is always a reference for objects, hence it's always pass by value. As a result, if you supply an object and alter its members inside the method, the changes continue outside of it. It appears to be pass by reference in this case. However, if you modify the values of the object variable, the change will not last, demonstrating that it is indeed passed by value.</p>",
  },
  {
    id: "J47",
    question:
      "Difference between Async/Await and Generators usage to achieve the same functionality.",
    answer:
      "<ul><li>Generator functions are run by their generator yield by yield which means one output at a time, whereas Async-await functions are executed sequentially one after another.</li><li>Async/await provides a certain use case for Generators easier to execute.</li><li>The output result of the Generator function is always value: X, done: Boolean, but the return value of the Async function is always an assurance or throws an error.</li></ul>",
  },
  {
    id: "J48",
    question: "What are the primitive data types in JavaScript?",
    answer:
      "<p>A primitive is a data type that isn't composed of other data types. It's only capable of displaying one value at a time. By definition, every primitive is a built-in data type (the compiler must be knowledgeable of them) nevertheless, not all built-in datasets are primitives. In JavaScript, there are 5 different forms of basic data. The following values are available:</p><ol><li>Boolean</li><li>Undefined</li><li>Null</li><li>Number</li><li>String</li></ol>",
  },
  {
    id: "J49",
    question: "What is the role of deferred scripts in JavaScript?",
    answer:
      "<p>The processing of HTML code while the page loads are disabled by nature till the script hasn't halted. Your page will be affected if your network is a bit slow, or if the script is very hefty. When you use Deferred, the script waits for the HTML parser to finish before executing it. This reduces the time it takes for web pages to load, allowing them to appear more quickly.</p>",
  },
  {
    id: "J50",
    question: "How EventLoop works?",
    answer:
      "<p>Event loop - a mechanism that manages the execution of code. It handles event processing and task execution in the correct order. The main idea of the event loop is that JavaScript runs in a single-threaded environment but can handle asynchronous operations. When an asynchronous operation, such as a server request, completes, it puts the corresponding event into the event queue. The event loop works in a loop, processing these events in the order they arrive. It takes an event from the queue and passes it for execution. If the event contains a callback or a handler, it is invoked, and the code associated with that event is executed. The event loop also handles other tasks, such as timers and microtasks (Promise). It manages the execution order of all these tasks to ensure consistency and prevent the blocking of the main thread of code execution.</p><p>In short, the event loop in JavaScript manages asynchronous operations by handling events in the queue and executing the corresponding code in the correct order. This allows JavaScript to be responsive and effectively utilize its resources when working with asynchronous operations.</p>",
  },
];
