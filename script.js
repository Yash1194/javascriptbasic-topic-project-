
var btn = document.querySelector('button')
var main = document.querySelector('main')

var arr = ['hay! i am yash', 'i love coding', 'javascript is fun', 'let us learn together', 'coding is life','sheriyians are the best','harsh bhaiya is great','mohit bhaiya is handsome']

btn.addEventListener('click', function() {
 var h1 = document.createElement('h1')

 
    var x = Math.random() * 100
    var y = Math.random() * 100
    var c1 = Math.floor(Math.random() * 256)
    var c2 = Math.floor(Math.random() * 256)
    var c3 = Math.floor(Math.random() * 256)
    var scl = Math.random() * 3
    var rotats = Math.random() * 360
    var a = Math.floor(Math.random() * arr.length)
    h1.innerText = arr[a]
    h1.style.position = 'absolute'
    h1.style.transform = 'scale(' + scl + ')'
    h1.style.left = x + '%'
    h1.style.top = y + '%'
  
    h1.style.rotate = rotats + 'deg'

    console.log((h1));

    main.appendChild(h1)
})