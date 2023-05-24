
const modal = document.getElementById('modal')
const modalbtn =document.getElementsByClassName('modal_btn')
console.log(modalbtn)

for (btn of modalbtn){
    btn1.addEventListener('click', function (){
        modal.classList.add('open')
    })
}

window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
        modal.classList.remove('open')
    }
})


