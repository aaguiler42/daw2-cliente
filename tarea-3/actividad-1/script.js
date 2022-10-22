const timeElement = document.querySelector('#time')

const updateTime = () => {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const time = `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`

    timeElement.textContent = "Fecha y hora: " + time
}

setInterval(updateTime, 1000)
