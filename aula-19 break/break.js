let n = 1
let max =1000

while(n < max) {
    console.log(n)
    n++
    if ( n >= 10) {
        break;
    }
}
console.log("fim do programa")

let pares = 0

for(let i = n; i <= max; i++) {
    console.log(i)
    if(i%2 != 0){
        continue
    }
    pares++ 
}

console.log("fim do programa")
console.log("quantidade de pares" +pares)