var optionImageArr = document.querySelectorAll('.option-image');
for(var i = 0; i < optionImageArr.length; i++){
    optionImageArr[i].style.backgroundImage = `url('./src/img/airbnb/option_bar_${i}.png')`
}

var bottomImgArr = document.querySelectorAll('.bottom-img');
bottomImgArr[0].addEventListener('click', function(){
    location.href='./airbnb-main.html'
})
bottomImgArr[1].addEventListener('click', function(){
    location.href='./airbnb-wishlist.html'
})
bottomImgArr[2].addEventListener('click', function(){
    location.href='./airbnb-login.html'
})



