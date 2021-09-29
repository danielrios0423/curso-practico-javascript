console.log("Hello world, Daniel Rios")

//Codigo del cuadrado
function perimetroCuadrado(ladoCuadrado) {

    return ladoCuadrado * 4;
}

function areaCuadrado(ladoCudrado){
    return ladoCudrado * ladoCudrado;
}

//Codigo Triangulo

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura)/2;
}

//Codigo Circulo
//Radio
//Diametro
function diametroCirculo(radio){
    return radio *2
}

//PI
const PI = Math.PI

//Perimetro y Area
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio)
    return diametro * PI

}

function areaCirculo(radio){
    return (radio * radio) * PI
}

// conexion con HTML Cuadrado
function calcularPerimetroCuadrado(){
    const value = (document.getElementById("inputCuadrado")).value

    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}

function calcularAreaCuadrado(){
    const value = (document.getElementById("inputCuadrado")).value
    const area = areaCuadrado(value)
    alert(area)
}

// conexion con HTML Triangulo
function parametrosTriangulo(){
    const inputL1 = Number((document.getElementById("inputLado1")).value)
    const inputL2 = Number((document.getElementById("inputLado2")).value)
    const inputBase = Number((document.getElementById("inputBase")).value)
    const inputAltura = Number((document.getElementById("inputAltura")).value)
    
    return [inputL1, inputL2, inputBase, inputAltura]
}
function calcularPerimetroTriangulo(){
    const [inputL1, inputL2, inputBase, inputAltura]  = parametrosTriangulo()
    const perimetro = perimetroTriangulo(inputL1, inputL2, inputBase)
    alert(perimetro)
}

function calcularAreaTriangulo(){
    const [inputL1, inputL2, inputBase, inputAltura]  = parametrosTriangulo()
    const area = areaTriangulo(inputBase, inputAltura)
    alert(area)
}

function parametrosCirculo(){
    const inputRadio = Number((document.getElementById("inputRadio")).value)
    return inputRadio
}
function calcularPerimetroCirculo(){
    const radio = parametrosCirculo()
    const perimetro = perimetroCirculo(radio)
    alert(perimetro)
}
function calcularAreaCirculo(){
    const radio = parametrosCirculo()
    const area = areaCirculo(radio)
    alert(area)
}
//
