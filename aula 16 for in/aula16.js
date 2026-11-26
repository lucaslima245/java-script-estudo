let num = [10, 20, 30,40,50]

for(let i=0;i < num.length; i++){
    console.log(num[i]) //mostra o elemento do array
}
console.log("-------------------------")
for(n in num) {  //n ta recebendo num
    console.log(num[n])// colecao e o indice da colecao
}

console.log("-------------------------")
for(n of num) {  //n ta recebendo num
    console.log(n) // mostra os elementos
}

const objs = document.getElementsByTagName("div")

for(i of objs){
    console.log(n)
}

for(i in objs) {
    console.log (objs[i])
}
