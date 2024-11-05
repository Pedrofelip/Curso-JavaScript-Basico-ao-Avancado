//faça uma verificação com if para ver se o usuario pode dirigir
//verifique três casos, se tiver cnh e for maior de 18, se é maior de 18 e não tem cnh e se não tem 18 e nem cnh

let idade = 18
let cnh = true

if(idade >= 18 && cnh == true){
    console.log('voce pode dirigir')
}else if(idade >= 18 && cnh == false){
    console.log('vai tirar sua cnh')
}else{
    console.log('voce não pode dirigir')
}