var grow = 0
var btn = document.querySelector('button')
var inner = document.querySelector('.inner')
var h2 = document.querySelector('h2')

btn.addEventListener('click', function() {
    btn.style.pointerEvents = 'none'

    var num = Math.floor(Math.random() * 100)

    var int = setInterval(function() {
        grow++ 
        h2.innerHTML = grow + '%'
        inner.style.width = grow + '%'
    },num)
    setTimeout(function() {
        clearInterval(int)
        h2.innerHTML= 'Downloded'
        btn.style.opacity = '0.5'
        console.log('your song downloded in ', num/10, 'seconds')
    },num*100)

})