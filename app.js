const inputs = document.querySelector("input")
const listItem = document.querySelectorAll(".listItem h2");
let listIte = document.querySelectorAll(".container .listItem");

inputs.addEventListener('keyup',()=>{

  for(let i = 0; i < listItem.length; i++){
    
    if(!listItem[i].innerHTML.toLowerCase().includes(inputs.value)){
         listIte[i].style.display = 'none'
    }else{
      listIte[i].style.display = 'flex'
    }
  }
 


})


