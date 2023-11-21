document.addEventListener('DOMContentLoaded', function () {
    var formulario = document.getElementById('meuFormulario');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita o envio do formulário padrão

        // Obtém os dados do formulário
        var imagem = document.getElementById('imagem').value;
        var titulo = document.getElementById('titulo').value;
        var genero = document.getElementById('genero').value;
        var sinopse = document.getElementById('sinopse').value;
        var resumo = document.getElementById('resumo').value;

        // Processa os dados como necessário (por exemplo, criar um objeto)
        var dadosProcessados = "<div class='card border' style='width: 18rem;' data-toggle='modal' data-target='#exampleModal1'>" +
        "<img src='" + imagem + "' class='card-img-top w-100 h-100' alt='...' style='object-fit: cover;'>" +
        "<div class='card-body'>" +
        "<h5 class='card-title'>" + titulo + "</h5>" +
        "<p class='card-text'>" + sinopse + "</p>" +
        "</div>" +
        "</div>" +

        // Modal
        "<div class='modal fade' id='exampleModal1' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel1' aria-hidden='true'>" +
        "<div class='modal-dialog' role='document'>" +
        "<div class='modal-content'>" +
        "<div class='modal-header'>" +
        "<h5 class='modal-title' id='exampleModalLabel1'>" + titulo + "</h5>" +
        "<button type='button' class='close' data-dismiss='modal' aria-label='Fechar'>" +
        "<span aria-hidden='true'>&times;</span>" +
        "</button>" +
        "</div>" +
        "<div class='modal-body'>" +
        "<img src='" + imagem + "' class='card-img-top w-100 h-100' alt='...' style='object-fit: cover;'>" +
        "<h5 class='card-title'>" + titulo + "</h5>" +
        "<p class='card-text'>" + resumo + "</p>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div id= 'livro'>" +
        "</div>";
        // Converte os dados para uma string JSON e armazena no localStorage
        localStorage.setItem('dadosProcessados', JSON.stringify(dadosProcessados));

        // Redireciona para a página de add.html
        window.location.href = 'add.html';
    });
});
