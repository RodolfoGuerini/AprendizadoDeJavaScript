function verificarIdade() {
    var idade = document.getElementById('idade').value
    var resultado = document.getElementById('resultado')

    resultado.className = ''

    if (idade.trim() === '') {
        resultado.textContent = 'Digite sua idade primeiro.'
        resultado.classList.add('erro')
        return
    }

    idade = Number(idade)

    if (isNaN(idade) || idade < 0) {
        resultado.textContent = 'Digite uma idade valida.'
        resultado.classList.add('erro')
    } else if (idade >= 18) {
        resultado.textContent = 'Voce e maior de idade.'
        resultado.classList.add('maior')
    } else {
        resultado.textContent = 'Voce e menor de idade.'
        resultado.classList.add('menor')
    }
}
