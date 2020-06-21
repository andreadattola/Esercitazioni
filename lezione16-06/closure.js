function test(){

let username= 'nunzio';
console.log(username);

function internalFunc(){

    let internalvar = 2;
    console.log(internalvar)
    console.log(username)
}
    return internalFunc;

}
let func = test()();