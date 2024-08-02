//Manipulação de Strings
let primeiroNome = "Bruno"
let ultimoNome = "Dal Prá"
let nomeCompleto = primeiroNome + " " + ultimoNome
console.log(nomeCompleto)

//Manipulação de Strings com números
let numero1 = 10
let numero2 = 20
let calculo1 = (numero1 + numero2)
console.log("Soma é igual a ",calculo1)
let calculo2 = (numero1 - numero2)
console.log("Subtração é igual a ",calculo2)
let calculo3 = (numero1 / numero2)
console.log("Divisão é igual a ",calculo3)
let calculo4 = (numero1 * numero2)
console.log("Multiplicação é igual a ",calculo4)

//Booleans
let Chuva = true
if(Chuva){
    console.log("Está chovendo")
} else{
    console.log("Não está chovendo")
}

//null e undefined
let resposta = null
let nota
console.log(resposta, nota)

let idUnico = symbol()

let produto ={
    [idUnico]: 123,
    nome: "Camiseta"
}
console.log(produto[idUnico], produto.nome)

//bigInt
let numeroGrande = BigInt("123456891234567891234567489789412312391238214")
let numero = 123456891234567891234567489789412312391238214
let numero3 = numeroGrande
console.log(numeroGrande, numero, "\n", numero3 )