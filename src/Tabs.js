import img from './assets/closure.png';
import './css/Tabs.css';
document.addEventListener('DOMContentLoaded',function(){
  let image = document.querySelector('img');
  image.src = `${img}`;
});
document.querySelector('.singleton-pattern').classList.add('show');
document.querySelector('.button-links').addEventListener('click',function(event){
  let nameId = event.target.id;
  let contentClasses = event.target.parentNode.parentNode.nextElementSibling.children;
  if(nameId==='singleton'){
    switchTabs('singleton-pattern')
  }
  else if(nameId==='observer'){
    switchTabs('observer-pattern')
  }
  else if(nameId==='facade'){
    switchTabs('facade-pattern')
  }
  function switchTabs(tabName){
    for(let idx = 0; idx < contentClasses.length; idx++){
      if(contentClasses[idx].className===tabName){
        contentClasses[idx].classList.add('show')
      }
      else{
        contentClasses[idx].classList.remove('show')
      }
    }
  }
},false)
