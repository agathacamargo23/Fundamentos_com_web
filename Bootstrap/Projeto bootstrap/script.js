var nome = window.document.getElementById('nome')
var email = window.document.getElementById('email')
var jogo = window.document.getElementById('jogo')

var okNome = false

function validarTudo() {
    let txtNome = document.getElementById('txtNome')
    let txtEmail = document.getElementById('txtEmail')
    let txtJogo = document.getElementById('txtJogo')
    if (nome.value.length < 2) {
        // alert('Olá Mundo!!')
        txtNome.innerHTML = 'nome invalido'
        txtNome.style.color = 'red'
        okNome = false
    } else {
        txtNome.innerHTML = 'deu bom'
        txtNome.style.color = 'green'
        okNome = true
    }

    if (email.value.length < 2) {
        // alert('Olá Mundo!!')
        txtEmail.innerHTML = 'email invalido'
        txtEmail.style.color = 'red'
        okNome = false
    } else {
        txtEmail.innerHTML = 'deu bom'
        txtEmail.style.color = 'green'
        okNome = true
    }

    if (jogo.value.length < 2) {
        // alert('Olá Mundo!!')
        txtJogo.innerHTML = 'texto invalido'
        txtJogo.style.color = 'red'
        okNome = false
    } else {
        txtJogo.innerHTML = 'deu bom'
        txtJogo.style.color = 'green'
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