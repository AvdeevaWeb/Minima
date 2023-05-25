
const modal = document.getElementById('modal')
const modalbtn =document.getElementsByClassName('modal_btn')




for (btn of modalbtn){
    btn.addEventListener('click', function (){
        modal.classList.add('open')
    })
}


window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
        modal.classList.remove('open')
    }
})

document.querySelector("#modal").addEventListener("click", () => { 
    modal.classList.remove('open')
 })
