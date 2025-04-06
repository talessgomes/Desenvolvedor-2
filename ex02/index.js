console.log("Desafio 2");
console.log("Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.");


function verificaFibonacci(numero) {
    
    let fib = [0, 1]; 
    let indice = 2; 
    while (fib[fib.length - 1] < numero) {
        fib.push(fib[indice - 1] + fib[indice - 2]); 
        indice++;
    }

    //Verificando se o número percente.
    if (fib.includes(numero)) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${numero} não pertence à sequência de Fibonacci.`;
    }
}

// Testando o número que vai ser passado para a minha função
const numero = 13; 


console.log(verificaFibonacci(numero));