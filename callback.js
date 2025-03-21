const add = (a,b) => {
    return a + b;
}

const sub = (a,b) => {
    return a - b;
}

const operate = (a,b,callback){
    console.log(callback(a,b));
}

operate(add(1,5));
operate(1,5,add);