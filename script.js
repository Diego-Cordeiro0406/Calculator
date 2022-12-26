//substring(0, num.length - 1) = diminui um caractere
function adc(nume){
let numero = document.getElementById("result").innerHTML
document.getElementById("result").innerHTML = numero + nume 
}
function limpar(){
    document.getElementById("result").innerHTML =""
}
function calcular(){
let resultado = document.getElementById("result").innerHTML
if(resultado){
    document.getElementById('result').innerHTML = eval(resultado)
}else{
    window.alert("[erro] nada para calcular")
}
}