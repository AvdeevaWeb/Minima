// document.addEventListener('DOMContentLoaded', function(){
//     document.getElementById('hamburger').classList.add('open')
// })

const hamburger = document.getElementById('hamburger')

hamburger.addEventListener('click', function(){
    document.getElementById('header').classList.toggle('open')
})
