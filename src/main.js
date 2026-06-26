// ======================== Mobile Links ========================= //
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const links = document.querySelectorAll('.link');
const icon = document.querySelector('#hamburger i')

hamburger.addEventListener('click', () => {
    menu.classList.toggle('-translate-y-full');

    if(icon.classList.contains('fa-bars')){
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    }else{
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');

    }
})

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('-translate-y-full');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
    })
});


// ======================== Fixed Nav ========================= //

const nav = document.getElementById('nav');

window.addEventListener('scroll', function(){
    if(window.scrollY > 20){
        nav.classList.remove('trans');
        nav.classList.add('bgGray', 'shadow-md');
    }else{
        nav.classList.add('trans');
        nav.classList.remove('bgGray', 'shadow-md');
    }
})

// ======================== InterSecting ========================= //

const cards = document.querySelectorAll('.cardFD, .cardFL, .cardFR, .cardFT');

const observer = new IntersectionObserver(function(entries){
    entries.forEach((entry, index) => {
        if(entry.isIntersecting){
            setTimeout(function(){
                entry.target.classList.remove(
                    'opacity-0', 
                    '-translate-y-20',
                    '-translate-x-20',
                    'translate-x-20',
                    'translate-y-20'
                );


                entry.target.classList.add(

                    'opacity-100',
                    'translate-y-0',
                    'translate-x-0'
                );
                
            },
            index * 300)
            observer.unobserve(entry.target);
        }
    });
},{
    threshold:0.5
}
)


cards.forEach(card => {
    observer.observe(card);
});