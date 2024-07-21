
document.addEventListener('DOMContentLoaded',()=>{
    swiper();
    desplegarNav();
    burguerMenu();
});




function swiper(){

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        autoplay: true
    });
}

const parallax = () => {
    const h1 = document.querySelector('h1');
    let translate = 0;
    let lastScrollTop = 0;

    document.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop < lastScrollTop) {
            // Si el scroll está subiendo, resetea translate a 0
            translate = 0;
        } else {
            // Si el scroll está bajando, incrementa translate
            translate += 5;
        }

        console.log(translate);
        h1.style.transform = `translateY(${translate}px)`;

        lastScrollTop = scrollTop;
    });
}

function desplegarNav() {
    const nav = document.querySelector('.nav-container');
    const main = document.getElementById('contenedorMain');
    
    window.addEventListener('scroll',()=>{
        if(main.getBoundingClientRect().top < 0){
            nav.classList.add('fixed');
        }else{
            nav.classList.remove('fixed')
        }
    })
}


function burguerMenu(){
    const mcBtn =  document.querySelector('.burguer-button');
    const nav = document.querySelector('.nav-container');

    mcBtn.addEventListener('click',()=>{
        nav.classList.toggle('show');
    })
}