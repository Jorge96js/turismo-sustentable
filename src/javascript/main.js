
document.addEventListener('DOMContentLoaded',()=>{
    swiper();
    desplegarNav();
    burguerMenu();
    hiddenLayout()
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
        document.body.classList.toggle('body-scroll')
    })
}

function hiddenLayout(){
    let container = document.querySelectorAll('.circle-video');
    let layout = document.querySelectorAll('.seccion_visit .layout');
    let info = document.querySelectorAll('.seccion_visit-info');

    let div = document.createElement('DIV');
    let a = document.createElement('A');
    div.classList.add('dynamic-btn');
    a.textContent = 'Reservar Ahora!';
    a.classList.add('book-button', 'book-now')
    div.appendChild(a)

    for(let i = 0; i<= 2; i++){
        container[i].addEventListener('mouseenter',()=>{
            layout[i].style.display = "none";
            info[i].style.display = "none";

            a.href = `pages/booknow.html?id=${i}`
            container[i].appendChild(div)
        })

        container[i].addEventListener('mouseleave',()=>{
            layout[i].style.display = "block";
            info[i].style.display = "flex";
            container[i].removeChild(div)
        })
    }

    i = (i > 2) ? 0 : i;
}
