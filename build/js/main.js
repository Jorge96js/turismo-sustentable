
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
    let container = document.querySelector('.circle-video');
    let layout = document.querySelector('.seccion_visit .layout');
    let info = document.querySelector('.seccion_visit-info')

    let container2 = document.querySelector('.destino2 .circle-video');
    let layout2 = document.querySelector('.destino2 .layout');
    let info2 = document.querySelector('.destino2 .seccion_visit-info')

    let container3 = document.querySelector('.destino3 .circle-video');
    let layout3 = document.querySelector('.destino3 .layout');
    let info3 = document.querySelector('.destino3 .seccion_visit-info')


        container.addEventListener('mouseenter',()=>{
            layout.style.display = "none";
            info.style.display = "none";
        })
        
        container.addEventListener('mouseleave',()=>{
            layout.style.display = "block";
            info.style.display = "flex";
        })

        container2.addEventListener('mouseenter',()=>{
            layout2.style.display = "none";
            info2.style.display = "none";

        })
        
        container2.addEventListener('mouseleave',()=>{
            layout2.style.display = "block";
            info2.style.display = "flex";

        })

        container3.addEventListener('mouseenter',()=>{
            layout3.style.display = "none";
            info3.style.display = "none";
        })
        

    }
