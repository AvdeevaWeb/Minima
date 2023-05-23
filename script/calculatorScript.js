

const inputs = document.getElementsByTagName('input')

const coverType = document.querySelectorAll('input[name = "coverType"]')
const blockChroma = document.querySelectorAll('input[name = "blockChroma"]')
const bookBinding = document.querySelectorAll('input[name = "bookBinding"]')
const format = document.querySelectorAll('input[name = "format"]')
const ecoPaper = document.querySelectorAll('input[name = "ecoPaper"]')

const priceElement = document.getElementById('price')
console.log(priceElement)

let basePrice = 50
let totalPrice 


for(const input of inputs){ 
  input.addEventListener('input', function(){
   priceElement.innerHTML = calculate()
  })
}


function calculate(){
  const edition = document.getElementById('footer__edition')
  let editionValue = parseInt(edition.value) 

  totalPrice = basePrice * editionValue
  console.log(editionValue)
if(editionValue >= 500){
  for(const radio of coverType){
    if(radio.checked){
      totalPrice +=  parseInt(radio.value) * editionValue
    }
  }

  for(const radio of blockChroma){
    if(radio.checked){
      totalPrice +=  parseInt(radio.value) * editionValue
    }
  }

  for(const radio of bookBinding){
    if(radio.checked){
      totalPrice +=  parseInt(radio.value) * editionValue
    }
  }

  for(const radio of format){
    if(radio.checked){
      totalPrice +=  parseInt(radio.value) * editionValue
    }
  }

  for(const radio of ecoPaper){
    if(radio.checked){
      totalPrice +=  parseInt(radio.value) * editionValue
    }
  }
  const ru = new Intl.NumberFormat("ru").format(totalPrice);
  return ru
}
else {
  const editionRange = document.getElementById('editionRange')
  editionRange.style.color = 'red' 
  return 0
}
  
}


    






// document.addEventListener('DOMContentLoaded', function() {
    
//     const footerInput1= document.querySelector("#footer__Input1").value()
    
//     footerInput1.addEventListener('input',function() {
//             console.log(footerInput1.value)
//         })
    
//       });
    



//console.log(footerInput1)


// footerInput1.addEventListener('input ',function() {
//     console.log(footerInput1.value)
// }
//  )


// function inputText(){
//     console.log("input")
// }