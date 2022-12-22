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
/*---------------------------daum-email-start-------------------------------- */
let read_mail = document.querySelectorAll('.mail-item');
let trash_image = document.querySelectorAll('.trash-img');
let favorite_icon = document.querySelectorAll('.favorite-icon');

for(let i = 0; i < read_mail.length; i++){
  read_mail[i].addEventListener('click', add_class)
  read_mail[i].addEventListener('mouseover', mouseover)
  read_mail[i].addEventListener('mouseout', mouseout)
  favorite_icon[i].addEventListener('click', change_color)

  function add_class(){
    read_mail[i].classList.toggle("read");
  }
  function mouseover(){
    read_mail[i].style.backgroundColor = "lightgray";
    trash_image[i].style.visibility = "visible"
  } 
  function mouseout(){
    read_mail[i].style.backgroundColor = "white";
    trash_image[i].style.visibility = "hidden"
  }
  function change_color(){
    let picsrc = favorite_icon[i].getAttribute("src") 
    let picsrc2 = favorite_icon[i].src
    console.log(picsrc)
    console.log(picsrc2)
    if(picsrc == './src/img/daum-mail/daum_favorite.png'){   
      favorite_icon[i].src = './src/img/daum-mail/daum_favorite_clicked.png'
    }else{
      favorite_icon[i].src = './src/img/daum-mail/daum_favorite.png'
    }
  }
}


/*---------------------------daum-email-end-------------------------------- */

        