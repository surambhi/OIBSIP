function convertTemperature() {

    const input = document.getElementById("temperature").value.trim();
    const unit = document.getElementById("unit").value;

    const error = document.getElementById("error");

    error.innerHTML = "";

    document.getElementById("celsius").innerHTML = "";
    document.getElementById("fahrenheit").innerHTML = "";
    document.getElementById("kelvin").innerHTML = "";

    // Validate numeric input
    if (input === "" || isNaN(input)) {
        error.innerHTML = "Please enter a valid numeric temperature.";
        return;
    }

    let temp = parseFloat(input);

    let c, f, k;

    if(unit==="C"){

        if(temp < -273.15){
            error.innerHTML="Temperature cannot be below absolute zero (-273.15°C).";
            return;
        }

        c=temp;
        f=(temp*9/5)+32;
        k=temp+273.15;

    }

    else if(unit==="F"){

        if(temp < -459.67){
            error.innerHTML="Temperature cannot be below absolute zero (-459.67°F).";
            return;
        }

        c=(temp-32)*5/9;
        f=temp;
        k=c+273.15;

    }

    else{

        if(temp < 0){
            error.innerHTML="Temperature cannot be below absolute zero (0 K).";
            return;
        }

        c=temp-273.15;
        f=(c*9/5)+32;
        k=temp;

    }

    document.getElementById("celsius").innerHTML =
    "Celsius: " + c.toFixed(2) + " °C";

    document.getElementById("fahrenheit").innerHTML =
    "Fahrenheit: " + f.toFixed(2) + " °F";

    document.getElementById("kelvin").innerHTML =
    "Kelvin: " + k.toFixed(2) + " K";

}
const input = document.getElementById("temperature");
const error = document.getElementById("error");

input.addEventListener("input", function () {
    if (input.value !== "" && isNaN(input.value)) {
        error.textContent = "Please enter numbers only.";
    } else {
        error.textContent = "";
    }
});