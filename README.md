# Day 1 QUIZ

-How does JSX differ from HTML?
JSX uses some JavaScript, for and using camel case, inlines styles.
-Is JSX required?
It is not needed and we can use html coding e.g of this can be using the repl shown yesterday to input the JSX and getting the same answer for the html side and we can use that HTML code which we can use and it will display the same
-What tool compiles JSX?
Babel is an example
-What is destructuring? Why do we do it? Contrast object destructuring with array destructuring.
Destructing allows us to make the object mutable and allows us to change the objects but not the format of it. E.g if we have city and name of the person, we can not add or remove objects but we are allowed to change the name of the city within
-Why prefer const/let over var?
As it is mutable and allows us to change the objects
-What tool did we use to create our React app?
Vite which also has the esbuild which was 0.37s build times and so on
-What Hooks did we use? What were they for?
useState e.g const [books, setBooks] = useState(defaultBooks); defaultBooks as our data
-How do we declare data that changes over time?
using state
-What’s the term for passing config settings into a component?
Props always an object as many properties as you want
-How do we declare what values our component accepts?
Having the Type then the props
-When do you declare a key? Why declare a key? What’s a good key? What’s a bad key?
Normally this is where the primary key will be, this is unique and needs to identify a set of objects. E.g, in the example for yesterday, we had numerical values for the key for the books. This does not need to be numerical but has to be unique to each other and identifiable, unique to the array
-How do you run an npm script?
npm run dev, dev is the name of the script the key is dev
-How do you make a function public?
export, private by default
-When does React re-render?
when you tell it to. e.g when we use the renderResults() it is everytime we deleted the row for example and it will keep rendering it when we press the delete button and then show the "no books" when there were no rows left
-How do you declare state in a class? A function?
You have the const and then the use in front of what it is and then the set e.g useState, setState
-What tool are we using to automatically format our code?
prettier
-What does JSX compile down to?
calls to react plain old JS
-What array method did we use to iterate over the list of users? What does it return?
map, another array
-What is a predicate?
function that takes a value and return a boolean
-What is a higher order function? List some higher order functions on the array prototype.
Reusing logic so example of seting something to 5 and then reusing that logic and adding another 5 to make 10??
-What are the benefits and downsides of using a default export?
Benefits are that it allows the code to be smaller and neater, however the downside could be that each of the components that are exported could be everywhere and it will not flow. Some users might think this is a negative banana problem, and you can rename it whatever you want, have it conventional, if the file exports lots of stuff maybe dont use default export {} named export
-Var is dead. Why? What should you use instead?
Const/Let
-Does const make an object immutable?
It does not make it immutable but it does not allow the user to refactor the set of objects
Name 2 ways to declare a React component. Which should you prefer?
Function or a class
-What’s the name for arguments passed to React components?
Props
-How do we specify the types for each argument?
Specifiy its types, typescript or proptype
-How did we debug?
we used the word debugger; this allows the debugger to pause when it reaches that code
-Is the code we see in the browser what’s actually running?
No it is mapped (source mapped)
