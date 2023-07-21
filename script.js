function toggleMode(){ //funcao donominada de um one click(onclick)
    const html = document.documentElement; //procurar no html(documentElement)

    const img = document.querySelector("#profile img") // profurar na pagina, pelo profile/img

    if(html.classList.contains('light')){ //procurar light no html
        html.classList.remove('light') // se achar remove
    }
    else{
        html.classList.add('light') // se não achar adiciona
    }



    if(html.classList.contains('light')){ //procurar light no html
        img.setAttribute("src", "./assets/assets/avatar-light.png") //se achar troca foto
        img.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando óculos escuro e camisa preta,sem barba e fundo azul e roxo modo light") //se achar troca descrição da foto
    }
    else{
        img.setAttribute("src", "./assets/assets/avatar.png") //se não achar permanece oq ja tava
        img.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando óculos e camisa preta,barba e fundo amarelo") //se não achar permanece oq ja tava
    }
}

//Pode usar tbm o elemento abaixo que realiza a operação automaticamente

//