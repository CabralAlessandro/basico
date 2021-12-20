//A Formúla: ℉ = ℃ * 1.8000 + 32.00

function CelciusToFahrenheit(c) {
    let fah = (c * 1.8) + 32;
    return fah;
}

let celcius = 30;

let resultado = CelciusToFahrenheit(celcius);

console.log(resultado);

/*
Exercício rápido, 10 minutos.

1) Atualizar o seu repostiório (pull)
2) Criar dentro da sua pasta a pasta Exercicios Rápidos
3) Criar o arquivo exercicio-1.js
4) Criar no arquivo exercicio-1.js uma função para converter um valor celsius em fahrenheit.

A Formúla:
℉ = ℃ * 1.8000 + 32.00

6) Teste seu código (30℃ é igual a 86℉)
7) Adicione sua pasta ao repositório remoto (comando add)
8) Faça commit;
9) Faça push;

*/
