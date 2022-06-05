function app() {
    hello();
    //sumar(3, 5);
    //nombreUsuario();
    //userSum();
}

function hello() {
    document.write('Hello Word')
}

function sumar(a, b) {
    let result
    result = a + b;
    console.log(result)
    document.write(" El resultado de sumar 3 + 5 = " + result)
}

function nombreUsuario() {
    let usuario = prompt("¿Cúal es tu nombre?")
    document.write("Hola " + usuario)
}

function userSum() {
    let a = parseInt(prompt("Introduce el primer número a sumar"));
    let b = parseInt(prompt("Introduce el segungudo número a sumar"));
    document.write("El Resultado es " + (a + b))
}


app()