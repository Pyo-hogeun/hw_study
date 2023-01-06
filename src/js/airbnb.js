$(document).ready(function(){
//airbnb-main start--------------------------------------------
   //option-bar 이미지 넣기
    var optionImageArr = document.querySelectorAll('.option-image');
    for(var i = 0; i < optionImageArr.length; i++){
        optionImageArr[i].style.backgroundImage = 
        `url('./src/img/airbnb/option_bar_${i}.png')`
    };

    //필터아이콘 클릭 여닫기
    $('.filter-icon').click(function(){
        $('.filter-wrap').show()
        $('.airbnb-main .bar-right .dim').show()
        $('.airbnb-main .gnb-bottom').hide()
    })
    $('.filter-wrap .xbutton').click(function(){
        $('.filter-wrap').hide()
        $('.airbnb-main .bar-right .dim').hide()
        $('.airbnb-main .gnb-bottom').show()
    })

    //필터내 range-bar 50개 생성
    var rangeBars = $('.airbnb-main .range-bars');
    for(var i =0; i < 50; i++){
        $(rangeBars).append('<div class="range-bar"></div>');
    }
    var rangeBarArr = $('.airbnb-main .range-bar');
    for(var i = 0; i < rangeBarArr.length; i++){
        var ranNum = Math.floor(Math.random() * 65);
        $(rangeBarArr[i]).css('height',ranNum)
    }

    //필터내 침실과침대 색깔바꾸기
    var bedRoomIcons = $('.airbnb-main .bedroom a')
    var bedIcons = $('.airbnb-main .bed a')
    var bathRoomIcons = $('.airbnb-main .bathroom a')
    for(var i = 0; i < bedRoomIcons.length; i ++){
        $(bedRoomIcons[i]).click(function(){
                $(this).toggleClass('selected');
                $(bedRoomIcons).not($(this)).removeClass('selected')
        })
        $(bedIcons[i]).click(function(){
                $(this).toggleClass('selected');
                $(bedIcons).not($(this)).removeClass('selected')
        })
        $(bathRoomIcons[i]).click(function(){
                $(this).toggleClass('selected');
                $(bathRoomIcons).not($(this)).removeClass('selected')
        })
    }
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



