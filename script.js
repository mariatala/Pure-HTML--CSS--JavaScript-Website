//Responsive Navigation
const navigation = document.querySelector('#navigation');
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', function(){
    navigation.classList.add('active')
})

closeBtn.addEventListener('click', () => {
    navigation.classList.remove('active');
    console.log('close buttonclicked')
})

 
//Sticky Navigation Bar Scroll
const stickyNav = document.querySelector('nav');

window.addEventListener('scroll', function(){
    stickyNav.classList.toggle('sticky', window.scrollY > 0)
})

const upBtn = document.querySelector('.up-btn');
window.addEventListener('scroll', function(){
    upBtn.classList.toggle('display', window.scrollY > 0)
})



//Getting the service section to display paragraphs
const services = document.querySelector('.services-items')
const pDisplayOne = document.querySelector('.display-one-none')
const pDisplayTwo = document.querySelector('.display-two-none')
const pDisplayThree = document.querySelector('.display-three-none')
const pDisplayFour = document.querySelector('.display-four-none')
const pDisplayFive = document.querySelector('.display-five-none')
const pDisplaySix = document.querySelector('.display-six-none')
const pDisplaySeven = document.querySelector('.display-seven-none')


services.addEventListener('click', function(event){
    let target = event.target;

    switch(target.id){
        case 'one':
            pDisplayOne.classList.toggle('display-one');
            break;
        
        case 'two':
            pDisplayTwo.classList.toggle('display-two');
            break;

        case 'three':
            pDisplayThree.classList.toggle('display-three');
            break;
            
        case 'four':
            pDisplayFour.classList.toggle('display-four');
            break;

        case 'five':
            pDisplayFive.classList.toggle('display-five');
            break;
        
        case 'six':
            pDisplaySix.classList.toggle('display-six');
            break;

        case 'seven':
            pDisplaySeven.classList.toggle('display-seven');
            break;
    }
}) 


// Fade in animation
const sections = document.querySelectorAll('section')

const options = {
    root:null,
    threshold:0.1,
    rootMargin: "-150px"
}

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if( !entry.isIntersecting){
            return;
        }

        entry.target.classList.toggle('fade-in')
        observer.unobserve(entry.target)
        
    })
},options)

sections.forEach(section => {
    observer.observe(section);
})