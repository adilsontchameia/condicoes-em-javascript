/*
var idade = 18

if (idade < 16) {
    console.log("nao vota")
} else if (idade < 18 || idade > 65) {
    console.log("opcional")
} else {
    console.log("obrigatorio")
}
*/


var agora = new Date()
var hora = agora.getHours() //posso pegar hota, data, mn 

console.log(`Agora sao ${hora} horas`)

if (hora < 12) {
    console.log("bom dia")
} else if (hora <= 18) {
    console.log("boa tarde")
} else {
    console.log("boa noite")
}


