var botao = document.querySelector("#resultado");

function calculaPreco(){
    var gasolina =  document.getElementById("gasolina").value;
    var alcool = document.getElementById("alcool").value;
    
    var melhor = alcool / gasolina;
    
    if(melhor > 0.7){
        alert ("GASOLINA");
        }else{ alert ("ÁLCOOL")};
}      
botao.addEventListener("click", function (event){
    event.preventDefault();
})