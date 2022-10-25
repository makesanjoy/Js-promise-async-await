async function f(){
    return "Hello World"
}
console.log(f());

function getSpecificNumber(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(43)
        }, 3000);
    })
}
function f() {
    const specificNumber = getSpecificNumber();
    console.log(specificNumber);
    
}
async function f() {
    const specificNumber =await getSpecificNumber();
    console.log(specificNumber);
    
}
f()