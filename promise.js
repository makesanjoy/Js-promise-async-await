const myPromise = new Promise(function(resolve,reject){
    resolve("value")
});
const res =myPromise.then(function(value){
    //this statement will print at the last
 console.log("This is inside a promise function");
})
//this statement will be printed first
console.log("This is written after the promise");

//New method
function calculateSquare(number) {
    const myPromise = new Promise(function(resolve,reject){
    setTimeout(() => {
        if(typeof number !=='number'){
            return reject(new Error("not a number"))
        }
        const result = number * number;
        resolve(result)
    }, 3000);
});
return myPromise;   
}

calculateSquare(3)
.then((value)=>{
console.log("success "+ value);
},reason =>{
    console.log("Error "+ reason)
})

//Chaining of promise
function calculateSquare(number) {
    const myPromise = new Promise(function(resolve,reject){
    setTimeout(() => {
        if(typeof number !=='number'){
            return reject(new Error("not a number"))
        }
        const result = number * number;
        resolve(result)
    }, 3000);
});
return myPromise;   
}

calculateSquare(3)
.then((value)=>{
console.log("success "+ value)
return calculateSquare(5);
},reason =>{
    console.log("Error "+ reason)
})
//here the value2 is passed as an argument from the previous return .then value but if we dont return anything in the 
//previous .then then it will give undefined
.then((value2)=>{
    console.log(value2);
    calculateSquare(4);
})
.then((value3)=>{
    console.log(value3);
    calculateSquare(5);
})
.then((value4)=>{
    console.log(value4);
})
//Above is the method for avoiding callback using promises
.catch((err)=>{
    console.log(err);
})


function logToConsole(somePromise) {
    somePromise.then(value=>console.log(value))
}
const somePromise = new Promise((resolve, reject) => {
    resolve("hello")
})
logToConsole(somePromise)

//Covert any value to promise
const string = "Sanjay"
const promisifiedValue = Promise.resolve(string);
const rejectedValue = Promise.reject(string);

logToConsole(promisifiedValue)

//Executing promise in parallel
function askFirstDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(8000)
        }, 3000);
    })
}
function askSecondDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(12000)
        }, 5000);
    })
}
function askThirdDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10000)
        }, 8000);
    })
}

Promise.all([askFirstDealer(),askSecondDealer(),askThirdDealer()])
.then((prices)=>{
    console.log(prices);
})

//handling promise.all rejects

function askFirstDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(8000)
        }, 3000);
    })
}
function askSecondDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           reject("Not suitable")
        }, 5000);
    })
}
function askThirdDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10000)
        }, 8000);
    })
}

Promise.all([
    askFirstDealer().catch(err=>{return err}),
    askSecondDealer().catch(err=>{return err}),
    askThirdDealer().catch(err=>{return err})
])
.then((prices)=>{
    console.log(prices);
},reason=>{
    console.log(reason);
})

//Executing  promise.race and gives the result which one is only fastest
var askJohn =()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve("Yep I got extra Pen") 
        }, 3000);
    })
}
var askSanjay =()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           reject("Sorry Bro I got only pen") 
        }, 5000);
    })
}
var askRahul =()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Sue I got a pen for you") 
        }, 2000);
    })
}

Promise.race(([
    askJohn().catch(err=>{return err}),
    askSanjay().catch(err=>{return err}),
    askRahul().catch(err=>{return err})
]))
.then(result=>{
    console.log(result);
},reason=>{
    console.log(reason);
})


