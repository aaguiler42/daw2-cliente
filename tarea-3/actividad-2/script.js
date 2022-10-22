const alertButton = document.querySelector('#alert-button')
const promptButton = document.querySelector('#prompt-button')
const newWindowButton = document.querySelector('#new-window-button')

alertButton.addEventListener('click', () => {
    alert('¡Hola!')
})

promptButton.addEventListener('click', () => {
    const namePrompt = prompt('¿Cómo te llamas?')
    alert(`¡Hola ${namePrompt} !`)
})

newWindowButton.addEventListener('click', () => {
    window.open('https://www.google.com')
})