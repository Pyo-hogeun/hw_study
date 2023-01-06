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
        $('.load-login').animate({'margin-top': '-80px'})
        $('.airbnb-wishlist .dim-class').addClass('dim')
        $('.gnb-bottom').addClass('hide')
        
    });
    $('.load-login .xbutton').click(function(){
        $('.load-login').css('display', 'none')
        $('.load-login').animate({'margin-top': '700'})
        $('.airbnb-wishlist .dim-class').removeClass('dim')
        $('.gnb-bottom').removeClass('hide')
    })
//airbnb-wishlist end--------------------------------------------

//airbnb-login start--------------------------------------------
    $('.nation-select').change(function(){
        let nationSelected = $('.nation-select option:selected').text()
        $('.input-number').attr('value', nationSelected.trim().split('(')[1].split(')')[0])
    })

    $('.email').click(function(){
        $('.email-input').toggleClass('hide')
        $('.user-number').toggleClass('hide')
        $('.warning').toggleClass('hide')
        $('.loginwith-number').toggleClass('hide')
        $('.loginwith-email').toggleClass('hide')
    })


    $('.apple-popup .drop-down-button').click(function(){
        $('.hide').toggleClass('show-hide');
        $('.dim').toggleClass('show-hide');
    })
//airbnb-login end--------------------------------------------

   

















});



