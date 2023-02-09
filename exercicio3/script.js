//Crie a const para a frase aqui

const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`

//b

const trocaPalavras = frase.replace('verde','rosa').replace('azul','laranja')
console.log(trocaPalavras)

const verificaPalavras1 = trocaPalavras.includes('verde')
const verificaPalavras2 = trocaPalavras.includes('laranja')
console.log(`Nova string possui "verde"? ${verificaPalavras1}
Nova string possui "laranja"? ${verificaPalavras2}`)

const trocaMaiuscula = trocaPalavras.toUpperCase("mas não deixe o gato sair")
console.log(trocaMaiuscula)