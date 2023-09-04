function add(a,b){
    console.log(a+b)
}

function sub(a,b){
    console.log(a-b)
}

function mul(a,b){
    console.log(a*b)
}

function div(a,b){
    console.log(a/b)
}
// add(2,3)
// sub(3,2)
// mul(2,3)
// div(3,2)

module.exports = {
    addition: add,
    substraction: sub,
    multiplication: mul,
    division: div
}