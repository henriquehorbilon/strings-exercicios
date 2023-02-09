const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

const removerEspaco = minhaString.trim()


console.log(`Quantidade de caracteres antes de remover os espaços: ${minhaString.length} 
Depois de remover os espaços: ${removerEspaco.length}`)

const substituirTracos = minhaString.replaceAll('________','sticioso')

console.log(substituirTracos)