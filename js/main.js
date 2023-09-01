const inputText = document.querySelector("#txt");
const AddButton = document.querySelector(".btn-list");
const listToDo = document.querySelector(".container ul");


AddButton.addEventListener('click',(e)=>{
  
if(inputText.value != ""){
  e.preventDefault();

  //create li
  const myLi = document.createElement('li');
  myLi.innerHTML=inputText.value;
  listToDo.appendChild(myLi);

  //create button 
  const ButtonDelete = document.createElement('span');
  ButtonDelete.innerHTML = "Delete";
  myLi.appendChild(ButtonDelete);
//  
inputText.value="";
}

let close= document.querySelectorAll('span');
for(let i=0;i<close.length; i++){
  close[i].addEventListener('click',()=>{
    close[i].parentElement.style.opacity=0;
    setTimeout(()=>{
      close[i].parentElement.style.display="none";
      close[i].parentElement.remove();
    },500);
  });
}


});
let close= document.querySelectorAll('span');
for(let i=0;i<close.length; i++){
  close[i].addEventListener('click',()=>{
    close[i].parentElement.style.opacity=0;
    setTimeout(()=>{
      close[i].parentElement.style.display="none";
      close[i].parentElement.remove();
    },500);
  });
}



