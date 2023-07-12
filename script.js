function convertToCelsius() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitOutput = document.getElementById("result");

    if (celsiusInput.value === "") {
        fahrenheitOutput.innerText = "Please enter a temperature in Celsius";
    } else {
        var celsius = parseFloat(celsiusInput.value);
        var fahrenheit = (celsius * 9 / 5) + 32;
        fahrenheitOutput.innerText = celsius + " Celsius is " + fahrenheit.toFixed(2) + " Fahrenheit";
    }
}

function convertToFahrenheit() {
    var fahrenheitInput = document.getElementById("fahrenheit");
    var celsiusOutput = document.getElementById("result");

    if (fahrenheitInput.value === "") {
        celsiusOutput.innerText = "Please enter a temperature in Fahrenheit";
    } else {
        var fahrenheit = parseFloat(fahrenheitInput.value);
        var celsius = (fahrenheit - 32) * 5 / 9;
        celsiusOutput.innerText = fahrenheit + " Fahrenheit is " + celsius.toFixed(2) + " Celsius";
    }
}
