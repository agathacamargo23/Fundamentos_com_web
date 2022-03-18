var nome = window.document.getElementById('nome') //busca seu id getElementByid
var email = window.document.getElementById('email')
var assunto = window.document.getElementById('assunto')

var okNome = false



function validarTudo() {
    let txtNome = document.getElementById('txtNome')
    let txtEmail = document.getElementById('txtEmail')
    let txtAssunto = document.getElementById('txtAssunto')

    if (nome.value.length < 2) {
        txtNome.innerHTML = 'Nome invalido'
        txtNome.style.color = 'red'
        okNome = false

    } else {
        txtNome.innerHTML = 'Deu tudo certo'
        txtNome.style.color = 'red'
        okNome = true


    }
    if (email.value.length < 2) {
        txtEmail.innerHTML = 'Email invalido'
        txtEmail.style.color = 'red'
        okNome = false

    } else {
        txtEmail.innerHTML = 'Deu tudo certo'
        txtEmail.style.color = 'red'
        okNome = true
    }

    if (assunto.value.length < 2) {
        txtAssunto.innerHTML = 'Assunto invalido'
        txtAssunto.style.color = 'blue'
        okNome = false

    } else {
        txtAssunto.innerHTML = 'Deu tudo certo'
        txtassunto.style.color = 'blue'
        okNome = true
    }
}

function enviar() {
    if (okNome == true) {
        alert('Mensagem enviada com sucesso!!')
    } else {
        alert('Preencha corretamente!')
    }
}