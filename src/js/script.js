// var qna = document.querySelector('.qna-section');
// qna.addEventListener('click', function(event){
//   console.log('클릭했어요');
//   console.log(event.target.parentElement);
//   var parent = event.target.parentElement;
//   var siblings = parent.nextElementSibling;
//   console.log(siblings.style.display);
//   if(siblings.style.display === 'block'){
//     siblings.style.display = 'none';
//   } else if(siblings.style.display === 'none'){
//     siblings.style.display = 'block';
//   }
// });

window.onload = function(){
  console.log(document.querySelectorAll('.qna-question').length);
  for(let i = 0; i < document.querySelectorAll('.qna-section').length; i++){
    let section = document.querySelectorAll('.qna-section')[i];
    section.addEventListener('click', function(event){
      event.preventDefault();
    })
  }
  for(let i = 0; i < document.querySelectorAll('.qna-question').length; i++){
    let qna = document.querySelectorAll('.qna-question')[i];
    qna.addEventListener('click', function(){
      console.log('i: ', i);
      if(document.querySelectorAll('.qna-answer')[i].style.display == 'none'){
        document.querySelectorAll('.qna-answer')[i].style.display = 'block'
      }else{
        document.querySelectorAll('.qna-answer')[i].style.display = 'none'
      }
    })
  }
}
        