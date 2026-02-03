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

function conversionTable() {
    celsiusInsert = document.getElementById("conversionTable");
    fahrenheitInsert = document.getElementById("conversionTable");
    for(i=0; i<110; i+=10) {
        celsius = i;
        fahrenheit = (i * 9/5 + 32);
        fahrenheitInsert.innerHTML+= 
        `<tr>
        <td>${celsius}</td>
        <td>${fahrenheit}</td>
        </tr>`;
    }
}