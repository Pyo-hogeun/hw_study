var qna = document.querySelector('.qna-section');
qna.addEventListener('click', function(event){
  console.log('클릭했어요');
  console.log(event.target.parentElement);
  var parent = event.target.parentElement;
  var siblings = parent.nextElementSibling;
  console.log(siblings.style.display);
  if(siblings.style.display === 'block'){
    siblings.style.display = 'none';
  } else if(siblings.style.display === 'none'){
    siblings.style.display = 'block';
  }
});