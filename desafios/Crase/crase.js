// Lista de Exercícios de CRASE:

// 🔹 Desafio 1: Saudação personalizada
// Crie uma função saudarUsuário(nome, hora) que retorna:

// "Bom dia, [NOME]!" se hora < 12
// "Boa tarde, [NOME]!" se hora entre 12 e 18
// "Boa noite, [NOME]!" se hora >= 18

// 🧠 Use crase para interpolar e evitar concatenação.

// function saudar(nome,hora) {
//     if (hora < 12){
//         return `Bom dia, ${nome}!`;
//     }
//     else if (hora>=12 && hora < 18 ){
//         return `Boa tarde, ${nome}!`;
//     }
//     else if (hora>=18 && hora <= 24 ){
//         return `Boa noite, ${nome}`;
//     }
//     else {
//         return `O horario: ${hora} é invalido`
//     }
// }
// console.log(saudar("maria",22));

// 🔹 Desafio 2: Gerador de recibo
// Crie uma função gerar Recibo(nome, produto, valor) que retorna o seguinte texto formatado em várias linhas:

// Recibo de Compra
// Cliente: [NOME]
// Produto: [PRODUTO]
// Total: R$[VALOR]
// Obrigado pela preferência!

function gerarRecibo(nome,produto,valor){
    return `Recibo de compra 
    cliente: ${nome}
    produto: ${produto}
    total:R$ ${valor}
    Obrigada pela preferência!`;
}
console.log(gerarRecibo("Ana","carro",30000));

// 🔹 Desafio 3: Template de e-mail
// Crie uma função emailBoasVindas(nome, curso) que retorna algo como:

// Olá, [nome]!
// Seja bem-vindo ao curso de [curso].
// Estamos felizes por tê-lo conosco!









// 🔹 Desafio 4: Função com cálculo interpolado
// Crie a função calcular desconto(nome, preço, desconto) que retorna:

// "Olá, [NOME]. O produto de R$[preço] com desconto de [desconto]% custa R$[valor Final]."

// 💡 Faça o cálculo de valor Final dentro da interpolação usando ${...}. 

















