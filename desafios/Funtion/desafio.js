// 🔧 1. Função saudacao()
// Crie uma função sem parâmetros que retorne "Olá, seja bem-vindo!".
function saudacao(){
    return "Olá seja bem-vindo"
}
console.log(saudacao());

// 📣 2. Função hello(nome)
// Recebe um nome como argumento e retorna "Olá, [nome]!".
function hello(nome){
    return "Olá, "+ nome
}
console.log(hello("Maria"));

// 🧮 3. Função soma(a, b)
// Recebe dois números como parâmetros e retorna a soma deles.
function soma(valor1,valor2){
    let soma1 = valor1 + valor2
    return  "soma dos valores da função " + soma1
}
console.log(soma(100,400));

// ❌ 4. Função Par(numero)
// Recebe um número e retorna true se for par, false se for ímpar.
function par(numero){
    if (numero %2 == 0){
        return true

    }else{
        return false
    }
}
console.log(par(12));


// 📊 5. Função media(n1, n2, n3)
// Calcula a média de 3 notas. Retorna a média e diz se o aluno foi aprovado (média ≥ 7).
function media(n1,n2,n3){
    let media = (n1 + n2 + n3) / 3;

}

// 6. Função dobro(numero)
// Recebe um número e retorna o dobro dele.
function dobro(num){

}


// 🟰 7. Função maior(a, b)
// Recebe dois números e retorna o maior entre eles.
function maior(num1,num2){
    if (num1 > num2){
        return num1 + "é maior que" + num2;
    }
    else if (num2 > num1){
        return num2 + "é maior que" + num1
    }
}



let nome = true
console.log(typeof nome);