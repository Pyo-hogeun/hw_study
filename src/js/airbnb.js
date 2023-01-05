$(document).ready(function(){
//airbnb-main start--------------------------------------------
    var optionImageArr = document.querySelectorAll('.option-image');
    for(var i = 0; i < optionImageArr.length; i++){
        optionImageArr[i].style.backgroundImage = 
        `url('./src/img/airbnb/option_bar_${i}.png')`
    };

    $('.filter-icon').click(function(){
        
    })
//airbnb-main end--------------------------------------------

//airbnb-wishlist start--------------------------------------------
    $('.login-button').click(function(){
        $('.load-login').css('display', 'block')
        $('.load-login').animate({'margin-top': '0'})
        $('.airbnb-wishlist .dim-class').addClass('dim')
    });
    $('.load-login .xbutton').click(function(){
        $('.load-login').css('display', 'none')
        $('.load-login').animate({'margin-top': '700'})
        $('.airbnb-wishlist .dim-class').removeClass('dim')
    })
//airbnb-wishlist end--------------------------------------------

//airbnb-login start--------------------------------------------
    $('.nation-select').change(function(){
        let nationSelected = $('.nation-select option:selected').text()
        $('.input-number').attr('value', nationSelected.trim().split('(')[1].split(')')[0])
    })
//airbnb-login end--------------------------------------------

   

















});



