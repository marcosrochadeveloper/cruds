const miniTwitter = {
    usuarios:  [
        {
            username: 'marcosrochaDEV',
        }
    ],
    posts: [
        {
            id: 1,
            owner: 'marcosrochaDEV',
            content: 'Meu primeiro Tweet'
        }
    ],
};
//CREATE
function criaPost(dados) {
    miniTwitter.posts.push({
        id: miniTwitter.posts.length +1,
        owner: dados.owner,
        content: dados.content
    });
};
criaPost({ owner: 'marcosrochaDEV', content: 'Segundo Tweet' })
criaPost({ owner: 'marcosrochaDEV', content: 'Terceiro Tweet' })
// console.log(miniTwitter.posts)

//READ
function pegaPosts() {
    return miniTwitter.posts;
}
console.log(pegaPosts())

//UPDATE
function atualizaContentDoPost(id, novoConteudo) {
    const postQueVaiSerAtualizado = pegaPosts().find((post) => {
        return post.id === id;
    })
    console.log(postQueVaiSerAtualizado)
    postQueVaiSerAtualizado.content = novoConteudo
}
atualizaContentDoPost(2, 'Novo conteúdo do post')
console.log(pegaPosts())

//DELETE
function apagaPost(id) {
    const listaDePostsAtualizada = pegaPosts().filter((postAtual) => {
        return postAtual.id !== id;
    })

    miniTwitter.posts = listaDePostsAtualizada;
}

apagaPost(1);
console.log(pegaPosts());