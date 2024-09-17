let nota = document.querySelector('#nota')
let btnCadastrar = document.querySelector('#btnCadastrar')

btnCadastrar.addEventListener('click' , (e) => {
    e.preventDefault();
    alert(verificaMedia(nota.value))
})

function verificaMedia(nota){
    if (nota >= 60){
        return 'aprovado'
    }else{
        return 'reprovado'
    }
}