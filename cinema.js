   
const catalago = require ('./dataBase/catalogo.json')
    
let filme3 = {
    codigo:3,
    titulo:'batman',
    duracao:1.10,
    atores:['Robert Pattinson','Andy Serkis','Zoë Kravitz'],
    anoDeLancamento:2022,
    emCartaz:true,
}
function adicionarFilme(adicionar){  
catalago.push(adicionar)
}
adicionarFilme(filme3)
let encontrada= false; 
function buscarFilme(indentificador){
    for(var i=0; i<catalago.length;i++)
    if(catalago[i].codigo==indentificador){
        encontrada=true
        return catalago[i].titulo
    }
}
 let buscar = buscarFilme(2)
 function 
 alterarStatusEmCartaz(indentificador){
    for(var i=0;i<catalago.length;i++)
    if(catalago[i].codigo==indentificador){
        if(catalago[i].emCartaz==true){
            catalago[i].emCartaz=true
        }
    }
 }
alterarStatusEmCartaz(2)
console.log(catalago)

 
