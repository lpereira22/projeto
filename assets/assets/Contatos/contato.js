function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !phone || !message) {
        alert("Por favor, preencha todos os campos do formulário.");
        return false;
    }

    // Adicione aqui a lógica para enviar o formulário, por exemplo, usando AJAX ou outra biblioteca de requisições HTTP.

    alert("Formulário enviado com sucesso!");
    return true;
}
