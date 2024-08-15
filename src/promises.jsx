

export const Promises = () => {

    const customPromise = new Promise((resolve, reject) => {

        // setTimeout( () => {
            const result = true;

            if(result){
                resolve("Thanks akash");
            }
            else
            reject("Why akash u have not complete promise ?")
        // }, 1000);
    })
    
    console.log('custom', customPromise)

    customPromise.then((res) => {
        console.log('res', res)
    })
    .catch((err)=>{
        console.log('err', err)
    })


    //  promise chaining

    // promise combinator ===> Promise.all, if anyone fails than all promise fails returns in an array
   
    // promise.race => it return that promise which get earlier failed or fulfilled 

    // jo prmose jldi pura hua use return krta hai like race lgii hui ho jaise

    // promise.allSettled -> it returns all promise whether failed or fulfilled

    // promise.any -->  it returns only first fulfilled promise which come earlier , it will reject all failed promise whether it comes first or not 

    // if all promises failed than it will through error

    // async/ await use try/catch 





    //  ----- Promise Polyfill


    function promisePolyfill(executor) {


        let onResolve, 
        onReject,
        isFulfilled = false,
        isRejected = false,
        isCalled=false,
        value;

        function resolve(val){
            isFulfilled = true;
            value=val;

            if(typeof onResolve === "function"){
                onResolve(val);
                isCalled= true;
            }

        }

        function reject(val){

            isRejected = true;
            value=val;

            if(typeof onReject === "function"){
                onReject(val);
                isCalled=true;
            }
        }

        this.then = function (callback){
            onResolve = callback;

            if(isFulfilled && !isCalled){
                isCalled= true;
                onResolve(value)
            }
            return this;
        }

        this.catch = function (callback){
            onReject = callback;

            if(isRejected && !isCalled){
                isCalled = true;
                onReject(value)
            }
            return this;
        }

        try{
            executor(resolve, reject);
        }
        catch (error){
            reject(error)
        }

    }


    const examplePromise = new promisePolyfill((resolve, reject) => {
        setTimeout(()=> {
            reject(2)
        }, 1000)
    });

    examplePromise.then((res)=>{
        console.log('example', res)
    })
    .catch((err) => {
        console.log('exampleErr', err )
    })


//  Polyfill for promise.all

 Promise.allPolyfill = (promises) => {
    return new Promise((resolve, reject) => {
        const result = [];

        if(!promises.length) {
            resolve(result);
            return;
        }

        let pending = promises.length;

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then((res) => {
                result[index] = res;
                pending--;

                if(pending === 0) {
                    resolve(results);
                }

            }, reject );
        })
    })
 }







    return (
        <>Promises</>
    )
}