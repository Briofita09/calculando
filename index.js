
function calculaPreco(gasolina, alcool){
    var gasolina =  document.getElementById("gasolina").textContent;
    var alcool = document.getElementById("alcool").textContent;
    
    var melhor = alcool/gasolina;
    
    if(melhor > 0.7){
        alert ("GASOLINA");
        }else{ alert ("ÁLCOOL")};
}      

var botao = document.querySelector("#resultado");
botao.onclick = calculaPreco();