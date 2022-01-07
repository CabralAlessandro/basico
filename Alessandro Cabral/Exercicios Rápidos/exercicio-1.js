
//Função para converter Celcius para Fahrenheit
function celciusToFarenheit (celcius) {
    
    var fahrenheit =  (celcius* 1.8000) + 32.00;

    return fahrenheit
}

//Função para converter Farenheit para Celcius
function farenheitToCelcius (fahrenheit){

    var celcius = (fahrenheit - 32.00)/1.8000
    return celcius
}


celcius = 30
farenheit = 86

console.log(farenheitToCelcius(farenheit) + "℉")
console.log(celciusToFarenheit(celcius) + "℃")