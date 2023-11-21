export class livro {
    card(imagem, titulo, sinopse, resumo) {
        var cardCompleto = "<div class='card border' style='width: 18rem;' data-toggle='modal' data-target='#exampleModal1'>" +
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

        return card;
    };

}