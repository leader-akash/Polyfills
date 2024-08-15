import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Promises } from './promises'
import { DebounceThrottling } from './deboucing-throttling'
import { Polyfills } from './polyfills'

function App() {
  const [count, setCount] = useState(0)

  let obj = { name: 'Akash' };

  // call 

  //   function sayHello(age, profession){
  //     return "Hello " + this.name + age + profession
  //   }

  //  console.log(sayHello.call(obj, 22, "Engineer"));

  // apply

  //   function sayHello(age, profession){
  //     return "Hello" + this.name + age + profession
  //   }

  //  console.log(sayHello.apply(obj, [22, "Engineer"]));



  //  ****** Bind ******"/.,m n"


  // function sayHello(age, profession){
  //   return "Hello " + this.name + age + profession
  // }

  // // console.log(sayHello.bind(obj, 22, "Engineer"));

  // const bindFunc = sayHello.bind(obj)

  // console.log(bindFunc(24, "SDE"))



  //  ----- Polyfill for call, bind, apply


  // let nameObj = { name: 'Akash' };

  // // // call 

  // function sayHello(age, profession) {
  //   console.log(`"Hello " + ${this.name} + ${age} + ${profession}`)
  //   return "Hello " + this.name + age + profession
  // }

  // Function.prototype.myCall = function (context = {}, ...args) {
  //   if (typeof this !== 'function') {
  //     throw new Error(this + 'its not callable')
  //   }

  //   context.fn = this;
  //   context.fn(...args)
  // }

  // sayHello.myCall(nameObj, 22, "Engineer");



  // ---- apply


  let nameObj = { name: 'Akash' };

  // call 

  // function sayHello(age, profession) {
  //   console.log(`"Hello " + ${this.name} + ${age} + ${profession}`)
  //   return "Hello " + this.name + age + profession
  // }

  // Function.prototype.myApply = function (context = {}, args = []) {
  //   if (typeof this !== 'function') {
  //     throw new Error(this + 'its not callable')
  //   }

  //   if(!Array.isArray(args)){
  //     throw new Error(this + 'its not iterable')
  //   }

  //   context.fn = this;
  //   context.fn(...args)
  // }

  // sayHello.myApply(nameObj, [22, "Engineer"]);



  // ---- bind ----


  function sayHello(age, profession) {
    console.log(`"Hello " + ${this.name} + ${age} + ${profession}`)
    // return "Hello " + this.name + age + profession
  }

  Function.prototype.myBind = function (context = {}, ...args) {
    if (typeof this !== 'function') {
      throw new Error(this + 'cannot be bound as its not callable')
    }

    context.fn= this;

    return function(...newArgs){
      return context.fn(...args, ...newArgs)
    }

  }

 const bindFn =  sayHello.myBind(nameObj, 22);

// console.log(bindFn("enginner," ))  



  return (
    <div>
      Hello Akash

      {/* <Promises /> */}
    
    <DebounceThrottling />

    <Polyfills />

    </div>
  )
}

export default App
