document.addEventListener('DOMContentLoaded', function(){
    pageSwiper();
    pagesTitles();
})

function pagesTitles(){
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const h1 = document.getElementById('formPage-title');


    switch (id) {
        case 0:
            h1.innerText = 'Reserva un hospedaje a Mendoza';
            break;
        case 1:
            h1.innerText = 'Reserva un hospedaje a Misiones';
            break;
        case 2:
            h1.innerText = 'Reserva un hospedaje a Santa Cruz';
            break;
        default:
            h1.innerText = 'Reserva un hospedaje a tu destino';
            break;
    }
}

function pageSwiper(){
    const swiper = new Swiper('.pages-swiper', {
        direction: 'vertical',
        loop: true,
        autoplay: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
    });
  
}

