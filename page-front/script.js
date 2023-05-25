const prevBtn = document.querySelectorAll('.carousel-prev');
const nextBtn = document.querySelectorAll('.carousel-next');
const cardContainers = document.querySelectorAll('.card-conteudos-container');

const move = 260;

nextBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const container = cardContainers[index];
        container.scrollBy({ left: move, behavior: 'smooth' });
    })
})


prevBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const container = cardContainers[index];
        container.scrollBy({ left: -move, behavior: 'smooth' });
    })
})



const buttonPerfil = document.getElementById('abrirPerfil');
const perfil = document.querySelector('.menu');

buttonPerfil.addEventListener('click', () => {
    if (perfil.style.display === 'none') {
        perfil.style.display = 'block';
    } else {
        perfil.style.display = 'none';
    }
});




function AbrirForm() {
    const form = document.querySelector(".display");
    var imagem = document.getElementById("imagem-entre-em-contato");
    if (form.style.display === "block") {
        form.style.display = "none";
        imagem.src = "./img/contato.png";
    } else {
        form.style.display = "block";
        imagem.src = "./img/contato-x.png";
        imagem.style.width = '120px'
    }
}


const form = document.getElementById('contact-form');
const msg = document.querySelector('.msg');
const enviado = document.querySelector('.enviado');
const input = document.querySelectorAll('input');
const button = document.querySelector('.enviar');
const email = document.querySelector('.email');




button.addEventListener('click', () => {
    if (!/\S+@\S+\.\S+/.test(email.value)) {
        event.preventDefault();
        msg.innerHTML = 'Por favor, preencha todos os dados';
        setTimeout(function () {
            msg.innerHTML = '';
        }, 7000);
    } else {
        input.innerHTML = ''
        enviado.innerHTML = 'Mensagem enviado, obrigado(a)!'
        setTimeout(function () {
            enviado.innerHTML = '';
        }, 9000);
    }
});



/*Fim do form*/


window.addEventListener("scroll", function () {
    var header = document.querySelector(".header");
    if (window.scrollY > 150) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
});


var imgs = document.querySelectorAll('img')

for (var i = 0; i < imgs.length; i++) {
    imgs[i].setAttribute('draggable', 'false')
}


