document.addEventListener("DOMContentLoaded", function() {

    const botao_trocar = document.getElementById("button");
    const exibirimagem = document.getElementById("exibirImagem")

    const imagens = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg"];
    let trocafoto = 0;

    botao_trocar.addEventListener("click", function () {
        trocafoto = (trocafoto + 1) % imagens.length;
        exibirimagem.src = imagens[trocafoto];
    });
        
    
});