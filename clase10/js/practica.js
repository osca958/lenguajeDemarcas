function suma(){
    let num1 = parseInt(document.getElementById("numero1").value); //ParseInt() lo que hace es parsear el string a int
    let num2 =parseInt(document.getElementById("numero2").value);

    let suma = num1 + num2;

    console.log("la suma de", num1, "+", num2,"es:",suma)
    alert("La suma es: "+ suma)
}

function suma2(){
    let num1 = parseInt(document.getElementById("numero1").value); //ParseInt() lo que hace es parsear el string a int
    let num2 =parseInt(document.getElementById("numero2").value);
    
    let suma = num1 + num2;

    document.getElementById("resultado").innerHTML = suma; //Lo inserta en el html
}

function funpromt(){
    let num1 = parseInt(prompt("Introduce un numero: "))
    let num2 = parseInt(prompt("Introduce otro numero: "))
    let suma = num1 + num2;

    document.getElementById("resultado").innerHTML = suma;


}
funpromt()

