
window.onload = ()=>{
    //lock the scroll until the page loads
setTimeout(()=>{
    document.body.style.overflow = 'auto'
},3000)
//animate the quote Line
const line = document.querySelector('.quoteLine')
const quote = document.querySelector('.quote')
setTimeout(()=>{
    line.style.height = window.getComputedStyle(quote).height

},500)
window.addEventListener('resize',()=> line.style.height = window.getComputedStyle(quote).height
)
//animate the name of steve jobs
const steve = document.querySelector('.teller')
steve.style.opacity = 1
//animate the quote
const quote1 = document.querySelector('.firstWord')
const quote2 = document.querySelector('.phrase')
let letters = ' is not just what it looks like and feels like. design is how it works.'.split('')
                            .map((letter,idx) => `<span style = "transition-delay:${idx * 30}ms">${letter}</span>`)
                                .join('')
quote2.innerHTML = letters
    setTimeout(() => {
        letters = document.querySelectorAll('.phrase span')
    letters.forEach(letter => letter.classList.add('shown'))  
    },600)

    //animate the arrow
const arrow = document.querySelector('.arrow')
setTimeout(()=>{
    arrow.style.opacity = 1
},3700)
arrow.addEventListener('mouseenter',()=>{
    arrow.classList.add('mouseEnter')
})
arrow.addEventListener('mouseleave',()=>{
    arrow.classList.remove('mouseEnter')
})
}


//go to the github page by clicking the icons
const projects = document.querySelectorAll('.work')
projects[0].addEventListener('click',()=> window.open('https://github.com/AhmedAbozaid9/pomodoro-app','_blank'))
projects[1].addEventListener('click',()=> window.open('https://github.com/AhmedAbozaid9/Tick-Tack-Toe','_blank'))
projects[2].addEventListener('click',()=> window.open('https://github.com/AhmedAbozaid9/simon-game','_blank'))



