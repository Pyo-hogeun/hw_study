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
let sent_id_title = document.querySelectorAll('.sent-id-title');
let mail_item = document.querySelectorAll('.mail-item');
let trash_image = document.querySelectorAll('.trash-img');
let favorite_icon = document.querySelectorAll('.favorite-icon');
let unread_icon = document.querySelectorAll('.unread-icon');
let sent_id = document.querySelectorAll('.sent-id');

for(let i = 0; i < mail_item.length; i++){
  sent_id_title[i].addEventListener('click', function(event){
    var title = event.target.parentElement;
    add_class(title.classList);
  });
  mail_item[i].addEventListener('mouseover', function(event){
    var targetoo = this.style;
    var targetoooo = this.querySelector('.trash-img').style;
    mouseover(targetoo, targetoooo);
  });
  mail_item[i].addEventListener('mouseout', function(event){
    var targetoo = this.style;
    var targetoooo = this.querySelector('.trash-img').style;
    mouseout(targetoo, targetoooo)
  });
  favorite_icon[i].addEventListener('click', function(event){
    var targetoo = event.target
    change_color(targetoo)
  });
  unread_icon[i].addEventListener('click', function(event){
    var targetoo = event.target
    change_unread(targetoo)
  });
  sent_id[i].addEventListener('mouseover', function(event){
    var targetoo = event.target.style
    console.log(targetoo)
    mouseover_sent_id(targetoo)
  })
}

function add_class(i){
  i.toggle("read");
}
function mouseover_sent_id(targetoo){
}
function mouseover(targetoo, targetoooo){
  targetoo.backgroundColor = "lightgray";
  targetoooo.visibility = "visible"
} 
function mouseout(targetoo, targetoooo){
  targetoo.backgroundColor = "white";
  targetoooo.visibility = "hidden"
}
function change_color(targetoo){
  let picsrc = targetoo.getAttribute("src") 
  if(picsrc == './src/img/daum-mail/daum_favorite.png'){   
    targetoo.src = './src/img/daum-mail/daum_favorite_clicked.png'
  }else{
    targetoo.src = './src/img/daum-mail/daum_favorite.png'
  }
}
function change_unread(targetoo){
  let picsrc = targetoo.getAttribute("src") 
  if(picsrc == './src/img/daum-mail/daum_unread.png'){
    targetoo.src = './src/img/daum-mail/daum_read.png'
  }else{
    targetoo.src = './src/img/daum-mail/daum_unread.png'
  }
}



/*---------------------------daum-email-end-------------------------------- */

        