const cont = document.querySelector(".container")
const rateing = document.querySelectorAll('.btn');
const thanks = document.querySelector('.thanks')
const rate = document.querySelector('.rate');
const submit = document.querySelector('.submit')

submit.addEventListener('click', () => {
    thanks.classList.remove('hidden')
    cont.style.display
})
 
rateing.forEach((rated) => {
    rated.addEventListener('click', () => {
        rate.innerHTML = rated.innerHTML
    })
})