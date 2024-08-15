export const Polyfills = () => {

    // Array.prototype.myMap = function (cb) {

    //     let temp = [];

    //     for(let i =0; i<this.length; i++){
    //         temp.push(cb(this[i], i, this))
    //     }

    //     return temp;
    // }

    // const arr = [5,2,3]

    // const newArr = arr.myMap((el, i, newArr ) => {

    //     console.log('el', el)
    // })


    // Array.prototype.myFilter = function (cb) {

    //     let temp = [];

    //     for(let i=0; i<this.length; i++){
    //         if(cb(this[i], i , this))
    //         temp.push(this[i]);
    //     }

    //     return temp;
    // }

    //  const arr = [5,2,3]

    // const newArr = arr.myFilter((el, i, newArr ) => {
    //     if(el>2){
    //         console.log('el', el)

    //     }
    // })




    // Array.prototype.myReduce = function (cb, initialValue){

    //     let acc = initialValue;


    //     for(let i = 0; i<this.length; i++){
    //         acc = acc ? cb(acc ,this[i], i , this) : this[i]
    //     }

    //     return acc;
    // }


    //  const arr = [5,2,3]

    // const sum = arr.myReduce((acc, el, i, newArr ) => {
       
    //     return acc + el
           

    // })

    // console.log(sum)



//  Call, bind, apply


//   let nameObj = { name: 'Akash' };

//   Function.prototype.myCall = function (context={}, ...args) {

//     if(typeof this !== 'function'){
//         throw new Error("its not an functon");
//     }

//     context.fn= this;
//     context.fn(...args);
//   }

//   function sayHello(age, profession){
//     console.log('hello' + this.name + age, profession)
//   }

//   sayHello.myCall(nameObj, 22, "engineer")



//   let nameObj = { name: 'Akash' };

// Function.prototype.myApply = function(context={}, args=[]) {

//     if(typeof this !== 'function'){
//         throw new Error("its not an functon");
//     }

//     if(!Array.isArray(args)){
//         throw new TypeError("no array")
//     }

//     context.fn = this;
//     context.fn(...args)

// }


//   function sayHello(age, profession){
//     console.log('hello' + this.name + age, profession)
//   }

//   sayHello.myApply(nameObj, [22, "sde"])




//   let nameObj = { name: 'Akash' };





//   function sayHello(age, profession){
//     console.log('hello' + this.name + age, profession)  
//   }





    return (
        <div>
            Polyfills
        </div>
    )
}