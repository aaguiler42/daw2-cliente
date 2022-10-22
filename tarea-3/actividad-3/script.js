const itecButton = document.querySelector('#itec-button')

itecButton.addEventListener('click', () => {
    const result = window.confirm('¿Estás seguro de que quieres ir a Itec?')
    if (result) window.open('https://www.itecfp.com')
    else window.alert('¡Qué pena!')
})
