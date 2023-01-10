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
        $('.filter-wrap').animate({'top' : '15px'})
        $('.airbnb-main .bar-right .dim').show()
        $('.airbnb-main .gnb-bottom').hide()
    })
    $('.filter-wrap .xbutton').click(function(){
        $('.filter-wrap').animate({'top' : '1000px'})
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

    //필터내 range-bar 최저가 최고가 출력
    var mini = Math.floor(Math.random()*10001);
    var max = Math.floor(Math.random()*100001 + 10000);
    console.log(mini)
    $('.airbnb-main .minimum-price').text('￦' + mini)
    $('.airbnb-main .maximum-price').text('￦' + max)

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

    //필터내 건물유형 border색상변경
    var buildingOption = $('.airbnb-main .building-option');
    for(var i = 0; i < buildingOption.length; i++){
        $(buildingOption[i]).click(function(){
            $(this).toggleClass('clicked');
        });
        $(buildingOption[i]).mousedown(function(){
            console.log(this)
            $(this).toggleClass('animated');
        })
        $(buildingOption[i]).mouseup(function(){
            console.log(this)
            $(this).toggleClass('animated');
        })
    }

    //필터내 편의시설 더보기
    var showMore = $('.airbnb-main .showmore');
    $(showMore).click(function(){
        $('.convenience').toggleClass('clicked')
        $(showMore).text() == '더 표시' ? $(showMore).text('접기') : $(showMore).text('더 표시');
    })

    //필터내 예약옵션 체크버튼 좌우이동
    var reservationButtonBack = $('.airbnb-main .button-background');
    var reservationButton = $('.airbnb-main .button-background .button');
    for(var i = 0; i < reservationButton.length; i++){
        $(reservationButtonBack[i]).click(function(){
            if($(this).children('.button').hasClass('animated') === true){
                $(this).children('.button').removeClass('animated');
                $(this).children('.button').animate({marginLeft:'3'},50);
                $(this).css('background-color','lightgray');
            }else{
                $(this).children('.button').addClass('animated');
                $(this).children('.button').animate({marginLeft:'22px'},50);
                $(this).css('background-color','black');
            }
        })
    }

    //필터내 전체 해제버튼
    var deselectAllOption = $('.airbnb-main .deselect-all-option');
    $(deselectAllOption).click(function(){
        $.each($('.option-checkbox'), function(i , o){
            if($(o).is(':checked')){
                $(o).prop('checked', false)
            }
        })

        $.each($('.bedroom a'), function(i, o){
            if($(o).hasClass('selected')){
                $(o).removeClass('selected')
            }
        })
        $('.bedroom a').eq(0).addClass('selected')

        $.each($('.bed a'), function(i, o){
            if($(o).hasClass('selected')){
                $(o).removeClass('selected')
            }
        })
        $('.bed a').eq(0).addClass('selected')

        $.each($('.bathroom a'), function(i, o){
            if($(o).hasClass('selected')){
                $(o).removeClass('selected')
            }
        })
        $('.bathroom a').eq(0).addClass('selected')
        
        $('.building-option').css('border','1px solid lightgray')

        $('.button-background').css({'background-color':'lightgray'})
        
        $('.button').css({'margin-left':'3px'})

        $.each($('.chkbox'), function(i , o){
            if($(o).is(':checked')){
                $(o).prop('checked', false)
            }
        })
        
    })

    //필터내 선택된 숙소표시버튼
    var showAllOption = $('.airbnb-main .show-all-option');
    $(showAllOption).click(function(){
        $('.dim').css('display', 'none')
        $('.filter-wrap').animate({'top' : '1000px'})

    })


    
//airbnb-main end--------------------------------------------

//airbnb-wishlist start--------------------------------------------
    $('.login-button').click(function(){
        $('.load-login').css('display', 'block')
        $('.load-login').animate({'margin-top': '-100px'})
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



