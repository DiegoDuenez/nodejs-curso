const Math = {}

function sumar(n1, n2){
    return n1 + n2;
}

function restar(n1, n2){
    return n1 - n2;

}

function multiplicar(n1, n2){
    return n1 * n2;

}

function dividir(n1, n2){

    if(n2 == 0){
        console.log("no se puede dividir por 0")
    }
    else{
        return n1 / n2;
    }

}

Math.sumar = sumar;
Math.restar = restar;
Math.multiplicar = multiplicar;
Math.dividir = dividir;

module.exports = Math