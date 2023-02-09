const pergunta1 = prompt(`Qual seu nome?`)
const pergunta2 = prompt(`Quais suas 3 comidas favoritas? Comida 1: `) 
const pergunta3 = prompt(`Comida 2: `) 
const pergunta4 = prompt(`Comida 3: `) 

function imprimirMensagem(nome,comida1,comida2,comida3){

    const frase = `Estas são as comidas favoritas de ${nome}:
    ${comida1}
    ${comida2}
    ${comida3}`

    console.log(frase)
}
imprimirMensagem(pergunta1,pergunta2,pergunta3,pergunta4)