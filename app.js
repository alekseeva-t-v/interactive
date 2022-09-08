const name = prompt('Как Вас зовут?')

document.querySelector('h3').textContent = 'Привет, ' + name
document.querySelector('h1').textContent = 'Сейчас ' + new Date().toLocaleTimeString()

setInterval(function() {
    document.querySelector('h1').textContent = 'Сейчас ' + new Date().toLocaleTimeString()
}, 1000)

const img = 
['url(./img/january.jpg) center no-repeat', 
'url(./img/february.jpg) center no-repeat', 
'url(./img/march.jpg) center no-repeat', 
'url(./img/april.jpg) center no-repeat', 
'url(./img/may.jpg)center no-repeat', 
'url(./img/june.jpg)center no-repeat', 
'url(./img/july.jpg)center no-repeat',
'url(./img/august.jpg)center no-repeat',
'url(./img/september.jpg)center no-repeat',
'url(./img/october.jpg)center no-repeat',
'url(./img/november.jpg)center no-repeat',
'url(./img/december.jpg)center no-repeat']
const colors = ['#f9d170', '#1f4654', '#332f02', '#59081e', '#e7e8e2', '#f7d9eb', '#dad2cf', '#e4ed87', '#803437', '#f9cfa9', '#bcd0f4', '#111406']
let index = 0

document.querySelector('button').onclick = function() {
    document.body.style.background = img[index]
    document.body.style.color = colors[index]
    index++;
    if (index >= img.length) index = 0
}

