// verificar quando o usuário passa o mouse em um dos personagens

const personagens = document.querySelectorAll('.personagem'); 

// adicionar a classe "selcionado" no personagem onde o usuário passa o cursos do mouse

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth' });
        }

        // verificar a exitência de um personagem já selecionado e retirar a classe "selecionado" dele

        removerSelecaoDoPersonagem(personagem);


        // pegar elementos do personagem grande para adicionar informações a ele
        const imagemPersonagemGrande = document.querySelector('.personagem-grande'); 

        // alterar a imagem do personagem grande
        const idPersonagem = personagem.attributes.id.value;

        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        // alterar o nome do personagem grande
        const nomePersonagem = document.getElementById('nome-personagem');

        nomePersonagem.innerText = personagem.getAttribute('data-name');

        // alterar descrição do personagem
        const descricaoPersonagem = document.getElementById ('descricao-personagem')

        descricaoPersonagem.innerText = personagem.getAttribute('data-description')
    })
})

function removerSelecaoDoPersonagem(personagem) {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
    personagem.classList.add('selecionado');
}
