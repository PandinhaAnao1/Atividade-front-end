let inputTitle = document.querySelector('#title')

let inputAutor = document.querySelector('#autor')

let inputAno = document.querySelector('#ano')

let btnAddLivro = document.querySelector('#btnAddLivro')

let conteudoTabela = document.querySelector('#conteudoTabela')

let mensagem = document.querySelector('#mensagem')

let idLivro = document.querySelector('#IdLivro')

let deleteLivro = document.querySelector('#deleteLivro')

let livros = []
getLivros()
renderizarTabela()

const addLivro = (titulo, autor, ano) => {
    
    let livro = {
        titulo : titulo,
        autor : autor,
        ano : ano
    }

    livros.push(livro)
    setLivros()
}

btnAddLivro.addEventListener('click', (e) => {
                                        e.preventDefault()
                                        addLivro(titulo= inputTitle.value,
                                        autor= inputAutor.value,
                                        ano = inputAno.value)
                                        limparFormulario()
                                        renderizarTabela()
                                        mostrarMensagem(`${titulo} cadastrado com sucesso`)
                                    })

deleteLivro.addEventListener('click', (e) => {
    e.preventDefault()
    deletarLivro(idLivro)
})

function limparFormulario(){
    inputTitle.value = '',
    inputAutor.value = '',
    inputAno.value = ''
}

function renderizarTabela(){
    id = 0
    conteudoTabela.innerHTML = `
    <p>Tabela de Livros</p>

    <table>
        <tr>
            <th>Id<th>
            <th>Título</th>
            <th>Autor</th>
            <th>Ano</th>
        <th>
        ${livros.map(livro => 
            `<tr>
                <th>${id++}<th>
                <td>${livro.titulo}</td>
                <td>${livro.autor}</td>
                <td>${livro.ano}</td>
             </tr>`
            ).join('')}
    <table>`
}

function mostrarMensagem(texto){
    mensagem.style.display = 'block'
    mensagem.innerHTML = texto

    setTimeout(() => {
            mensagem.style.display = 'none'
    },3000)
}

function getLivros(){
    livros = JSON.parse(localStorage.getItem('livros')) || []
}

function setLivros(){
    localStorage.setItem("livros",JSON.stringify(livros))
}

function deletarLivro(position){
    if(livros.length > position){
        livros.splice(livros.indexOf(position), 1)
        setLivros()
        renderizarTabela()
        console.log("chegou")
    }
    console.log((livros.length))
}