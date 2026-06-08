 //NAMED FUNCTIONS
 function greet(name:string):string{
    return `hello,${name}`;

 }
 console.log(greet("victor"));
 //anonymous functions ,a fn without a name assigned to a variable
 const greet2 = function(name:string):string{
    return `hello,${name}`;
 }
 console.log(greet2("victor"));
 //arrow functions, shorter and modern way to write functions
 const addNumbers = (a:number,b:number):number => a+b;
 console.log(addNumbers(5,10));
 //default parameters,uses a default value if no argument provided
 function multiply (a:number,b:number=10):number{
    return a*b;
 }
 console.log(multiply(5));
 console.log(multiply(5,20));

 //optional parameters,parametrs marked with ? are optional
 function welcome(name:string,age?:number):string{
return age? `hello,${name},you are${age} years old`
         :`hello,${name}`;
 }
 console.log(welcome("victor"));
 console.log(welcome("victor,23"))

 //rest parameters, accept any number of arguments 
 function sum(...numbers:number[]):number{
    return numbers.reduce((acc,num)=> acc + num,0);

 }
 console.log(sum(1,2,5,6,7))

 //call back functions, a function passed as an argument to another function and executed later
 function processInput(
    name:string,
    callback:(message:string) =>void
 ):void{
    callback(`hello,${name}`);
 }
 processInput("koech",(message)=>{
    console.log(message);
 });
 //async functions, used when working with asynchronous operations
 async function fetchData(): Promise<string>{
    return "data fetched successfully";
 }
  fetchData().then(data =>console.log(data));

  //function overloading,allows multiple function signatures
  function combine(a:string,b:string):string;
  function combine(a:number,b:number):number;
      function combine(a:any,b:any):any{
        return a+b;

      }
      console.log(combine(5,20)) 
      console.log(combine("hello ", "Typescript"));