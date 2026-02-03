function convertToFahrenheit() {
    userValue = document.getElementById("temp-converter-temp").value;
    userValue = (userValue * 9/5) + 32;
    conversionOutput = document.getElementById("convert-result")
    conversionOutput.innerHTML=(`${userValue}`);

}

function convertToCelsius() {
    userValue = document.getElementById("temp-converter-temp").value;
    userValue = (userValue - 32) * 5/9;
    conversionOutput = document.getElementById("convert-result")
    conversionOutput.innerHTML=(`${userValue}`)
}