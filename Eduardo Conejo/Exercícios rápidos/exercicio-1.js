/* Criar no arquivo exercicio-1.js uma função para converter um valor celsius em fahrenheit.

A Formúla:
℉ = ℃ * 1.8000 + 32.00

Teste seu código (30℃ é igual a 86℉) */

function calcularTemperatura (C){
    return ((C * 1.8000) + 32.00)    // Fórmula que converte Grau Celcius em Fahrenheit
}
console.log(calcularTemperatura(30)); // Informa o calor de C (celsius)