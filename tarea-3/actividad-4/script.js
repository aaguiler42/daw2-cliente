const userAgent = document.querySelector('#user-agent')
userAgent.textContent = navigator.userAgent

const userLanguage = document.querySelector('#user-language')
userLanguage.textContent = navigator.language

const cookies = document.querySelector('#cookies')
cookies.textContent = navigator.cookieEnabled

const platform = document.querySelector('#platform')
platform.textContent = navigator.platform

const online = document.querySelector('#online')
online.textContent = navigator.onLine

console.log(navigator.onLine)