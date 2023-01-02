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
let delete_button = document.querySelector('.delete-checkbox');
let mail_checkbox = document.querySelectorAll('.mail-checkbox');
let top_item = document.querySelectorAll('.top-item');

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
    var targetoooooo = mail_checkbox[i];
    mouseout(targetoo, targetoooo, targetoooooo)
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
    var targetoo = this.style
    console.log(targetoo)
    mouseover_sent_id(targetoo)
  })
  sent_id[i].addEventListener('mouseout', function(event){
    var targetoo = this.style
    console.log(targetoo)
    mouseout_sent_id(targetoo)
  })
}

// delete_button.addEventListener('click', function(){
//   for(let i = 0; i < mail_checkbox.length; i++){
//     if(delete_button.checked == false){
//       mail_checkbox[i].checked = false;
//       mail_item[i].style.backgroundColor = 'white';
//     }else{
//       mail_checkbox[i].checked = true;
//       console.log(mail_item[i].style.backgroundColor)
//       mail_item[i].style.backgroundColor = 'lightgray';
//     }
//   }
// })

for (let i = 0; i < top_item.length; i++){
  top_item[i].addEventListener('click', function(){
    let isChecked = false;
    for(let j = 0; j < mail_checkbox.length; j++){
      if(mail_checkbox[j].checked == true){
        isChecked = true;
      }
    }
    if(isChecked == false){
      document.querySelector('.dim').style.display = 'block'
    }

    for (let j = 0; j < mail_checkbox.length; j++){
      let isChecked = false;
      if(mail_checkbox[j].checked == true){
        isChecked = true
      }
    }
    if(isChecked == false){
      document.querySelector('.dim').style.display = 'block';
    }
  })
  };


// document.querySelector('.choose-x').addEventListener('click', function(){
//   document.querySelector('.dim').style.display = 'none';
// })
// document.querySelector('.choose-confirm').addEventListener('click', function(){
//   document.querySelector('.dim').style.display = 'none';
// })


function add_class(i){
  i.toggle("read");
}
function mouseover_sent_id(targetoo){
  targetoo.textDecoration = "underline";
}
function mouseout_sent_id(targetoo){
  targetoo.textDecoration = "none";
}
function mouseover(targetoo, targetoooo){
  targetoo.backgroundColor = "lightgray";
  targetoooo.visibility = "visible"
} 
function mouseout(targetoo, targetoooo, targetoooooo){
  if(targetoooooo.checked == true){
    targetoo.backgroundColor = "lightgray";
  }else{
    targetoo.backgroundColor = "white";
  }
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
/* -----------------------------apple start----------------------------------------*/
// document.querySelector('.left').addEventListener('click', slidePrev)
// document.querySelector('.right').addEventListener('click', slideNext)

// let count = 0
// let imgCount = document.querySelectorAll('.img-item').length

// function slidePrev(){
//   let currentTransform = document.querySelector('.display-image').style.transform
//   let aa = currentTransform.split('(')
//   let bb = aa[1].split('px',1)
//   let translateXValue = Number(bb[0])

//   if(count > 0){
//     document.querySelector('.display-image').style.transform = `translateX(${translateXValue + 420}px)`;
//     count --;
//   }
// }

// function slideNext(){
//   let currentTransform = document.querySelector('.display-image').style.transform;
//   let aa = currentTransform.split('(')
//   let bb = aa[1].split('px',1)
//   let translateXValue = Number(bb[0])
  
//   if(count <= imgCount - 4){
//     document.querySelector('.display-image').style.transform = `translateX(${translateXValue - 420}px)`;
//     count ++;
//   }
// }

/* -----------------------------apple end----------------------------------------*/
/*------------------- hometax start -------------------*/

var centerItemArr = document.querySelectorAll('.center-item');
var megaDropArr = document.querySelectorAll('.mega-drop');
for(let i = 0; i < centerItemArr.length; i++ ){
  centerItemArr[i].addEventListener('mouseover', function(){
    megaDropArr[i].style.display = 'flex';
  });
};










/*------------------- hometax end -------------------*/
