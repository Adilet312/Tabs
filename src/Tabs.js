import img from './assets/closure.png';
import './css/Tabs.css';
document.addEventListener('DOMContentLoaded',function(){
  let image = document.querySelector('img');
  image.src = `${img}`;
});

let btns = document.querySelectorAll('.patterns');
let articles = document.querySelectorAll('.articles');
btns.forEach(button =>{
  button.addEventListener('click',(event)=>{
    cleanAllButtonsActiveClasses();
    event.target.classList.add('active');
    let contentId = event.target.dataset.id;
    content(contentId);
  })
})

/*Content add active class*/
function content(contentId){
  articles.forEach( (content) =>{
    if(content.id===contentId){
      cleanAllContentsActiveClasses();
      content.classList.add('active');
    }
  })
}
/*Remove all active clsses from content Elements*/
function cleanAllContentsActiveClasses(){
  articles.forEach( (content) => content.classList.remove('active'));
}
/*Remove all active clsses from button Elements*/
function cleanAllButtonsActiveClasses(){
  btns.forEach( (button) => button.classList.remove('active'));
}
