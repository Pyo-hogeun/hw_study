$(document).ready(function(){
//airbnb-main start--------------------------------------------
    //where-when-who 슬라이드업
    let filterWrapHeight = $('.airbnb-main').outerHeight()
    
    $('.airbnb-main .bar-left .search-icon').click(function(){
        $('.where-when-who-wrap').animate({'top':'0'})
        $('.airbnb-main .gnb-bottom').hide()
    })
    $('.airbnb-main .where-when-who-wrap').css('top', filterWrapHeight)
    $('.airbnb-main .where-when-who-wrap .xbutton').click(function(){
        $('.where-when-who-wrap').animate({'top':filterWrapHeight})
        $('.airbnb-main .gnb-bottom').show()
    })
    
    //www top menu 밑줄 좌우 움직이기
    var topMenuArr = $('.airbnb-main .where-when-who-wrap .top-menu a');
    for(let i = 0; i < topMenuArr.length; i++){
        $(topMenuArr[i]).click(function(){
            var moveXVal = $(topMenuArr[1]).offset().left - $(topMenuArr[0]).offset().left;

            if($(this).hasClass('selected') == false){
                $(this).addClass('selected')
                $(topMenuArr).not($(this)).removeClass('selected');
            }
            if($(this).offset().left >= $(topMenuArr).not(this).offset().left){
                $('.underline').animate({'left': moveXVal})
            }else{
                $('.underline').animate({'left': 0})
            }
            //position 값 활용하기-------------------------
            // console.log($(this).position().left)
            //position 값 활용하기-------------------------
        })
    }

    //pc pc-bar top-center 확장
    $('.airbnb-main .pc-bar .top-center').click(function(){
        $('.airbnb-main .pc-bar .top-center-detail').css('display','flex')
        $('.airbnb-main .pc-bar .top-center').hide()
        $('.airbnb-main .option-bar').hide()
        $('.airbnb-main .pc-bar').css('height','170px')
        $('.airbnb-main .pc-bar').css('align-items','flex-start')
        $('.airbnb-main .pc-bar .top-right').css('margin-top','20px')
    })
    $('.airbnb-main').click(function(e){
        if($(e.target).parents().hasClass('pc-bar') == false){
            $('.airbnb-main .pc-bar .top-center-detail').css('display','none')
            $('.airbnb-main .pc-bar .top-center').show()
            $('.airbnb-main .option-bar').show()
            $('.airbnb-main .pc-bar').css('height','auto')
            $('.airbnb-main .pc-bar').css('align-items','center')
            $('.airbnb-main .pc-bar .top-right').css('margin-top','0')
        }
    })

    //pc pc-bar 숙소 체험 온라인체험
    $('.airbnb-main .top-center-detail .title').click(function(){
        $('.airbnb-main .top-center-detail .title').removeClass('selected')
        $(this).addClass('selected')
    })
    $('.airbnb-main .top-center-detail .house-wrap .title').click(function(){
        $('.airbnb-main .top-center-detail .house').css('display', 'flex')
        $('.airbnb-main .top-center-detail .try').css('display', 'none')
    })
    $('.airbnb-main .top-center-detail .try-wrap .title').click(function(){
        $('.airbnb-main .top-center-detail .house').css('display', 'none')
        $('.airbnb-main .top-center-detail .try').css('display', 'flex')
    })


    //pc버전 gnb-top language버튼 language-wrap 띄우기
    var pcLanguageButton = $('.airbnb-main .pc-bar .language-icon')
    $(pcLanguageButton).click(function(){
        $('.language-wrap').show()
        $('.dim').show()
        $('.airbnb-main .filter-icon-wrap-pc').hide()
    })
    $('.airbnb-main .top-right .close-language').click(function(){
        $('.language-wrap').hide()
        $('.currency-wrap').hide()
        $(currencySelect).removeClass('selected')
        $(languageSelect).addClass('selected')
        $('.dim').hide()
        $('.airbnb-main .filter-icon-wrap-pc').show()
    });
    
    //pc- language-wrap 내에 언어와지역 통화 선택
    var languageSelect = '.airbnb-main .top-right .language-currency .language'
    var currencySelect = '.airbnb-main .top-right .language-currency .currency'
    $(languageSelect).click(function(){
        $(languageSelect).removeClass('selected')
        $(currencySelect).removeClass('selected')
        $(languageSelect).addClass('selected')
        $('.airbnb-main .top-right .language-wrap').show()
        $('.airbnb-main .top-right .currency-wrap').hide()
    })
    $(currencySelect).click(function(){
        $(languageSelect).removeClass('selected')
        $(currencySelect).removeClass('selected')
        $(currencySelect).addClass('selected')
        $('.airbnb-main .top-right .language-wrap').hide()
        $('.airbnb-main .top-right .currency-wrap').show()
    })

    //pc-language-wrap 내에 번역버튼 좌우이동
    var languageCheckButton = $('.airbnb-main .check-button-wrap')
    $(languageCheckButton).click(function(){
        $(this).toggleClass('checked')
        $(this).children().toggleClass('checked')
    })

    //pc버전 gnb-top 로그인버튼
    var pcLoginProfile = $('.airbnb-main .pc-bar .top-right .profile')
    $(pcLoginProfile).on('click', function(e){
        $('.airbnb-main .pc-bar .top-right .login-menu').toggleClass('selected')
    })
    $('.airbnb-main').click(function(e){
        if($(e.target).parents().hasClass('profile-wrap') == false){
            $('.airbnb-main .pc-bar .top-right .login-menu').removeClass('selected')
        }
    })
   
    //pc-filter-wrap열기
    $('.airbnb-main .filter-icon-wrap-pc .icon-wrap .filter-icon').click(function(){
        $('.airbnb-main .filter-wrap').show()
        $('.filter-wrap').animate({'top' : '10%'})
        $('.airbnb-main .bar-right .dim').show()
        $('.airbnb-main .filter-wrap').addClass('pc-versioned')
        $('.airbnb-main .filter-gnb-bottom').addClass('pc-versioned')
    })

    //where 펼치기
    $('.airbnb-main .where').click(function(){
        $('.airbnb-main .when').removeClass('selected')
        $('.airbnb-main .who').removeClass('selected')
        $('.airbnb-main .where').addClass('selected')
        
    })
    $('.airbnb-main .when').click(function(){
        $('.airbnb-main .where').removeClass('selected')
        $('.airbnb-main .who').removeClass('selected')
        $('.airbnb-main .when').addClass('selected')
        
    })
    $('.airbnb-main .who').click(function(){
        $('.airbnb-main .where').removeClass('selected')
        $('.airbnb-main .when').removeClass('selected')
        $('.airbnb-main .who').addClass('selected')
    })
    //where 이미지 넣기 /클릭
    var continentImgArr = $('.airbnb-main .continent-img')
    for(var i = 0; i < continentImgArr.length; i ++){
        $(continentImgArr[i]).css('background-image', `url(./src/img/airbnb/continent_${i + 1}.png)`)
    }
    $.each(continentImgArr, function(index, object){
        $(object).click(function(){
            continentImgArr.css('border', '0')
            $(object).css('border', '2px solid black')
        })
    })

    //when 날짜선택,유연한 일정 / 선택활성화
    var twoOptionArr = $('.airbnb-main .two-option .option-item')
    $.each(twoOptionArr, function(i, object){
        $(object).click(function(){
            $(twoOptionArr).removeClass('selected')
            $(object).addClass('selected')
            if(i == 0){
                $('.airbnb-main .when .pick-option').css('display','block')
                $('.airbnb-main .when .flex-option').css('display','none')
            }else{
                $('.airbnb-main .when .pick-option').css('display','none')
                $('.airbnb-main .when .flex-option').css('display','block')
            }
        })
    })


    //when 유연한일정 숙박기간
    var optionDurationArr = $('.airbnb-main .travel-duration .option-box .option-item .option')
    $.each(optionDurationArr, function(idx, obj){
        $(obj).click(function(){
            $(optionDurationArr).css({'border' : '1px solid lightgray'})
            $(this).css({'border' : '2px solid black'})
        })
    })

    //when 유연한일정 여행날짜 1~12월 html 만들기
    var optionDateBox = $('.airbnb-main .travel-date .option-box')
    var optionHtml = `<l1 class="option-item">
    <a href="#" class="option">
    <div class="calendar-image"></div>
    <div class="month"></div>
    <div class="year">2023</div>
    </a>
    </li>`
    for(let i = 0; i < 12; i++){
        $(optionDateBox).append(optionHtml)
    }

    let now = new Date()
    let nowMonth =  7;
    let nowYear = now.getFullYear();
    let monthArr = [];
    let yearArr = [];

    for(let i = 0; i < 12; i ++){
        if(nowMonth <= 12){
            monthArr.push(nowMonth)
            yearArr.push(nowYear)
            nowMonth++;
        }else{
            nowMonth -= 12;
            monthArr.push(nowMonth)
            nowMonth++
            nowYear += 1;
            yearArr.push(nowYear)
        }
    }
 
    var optionMonthArr = $(optionDateBox).find('.month')
    $.each(optionMonthArr, function(idx, obj){
        $(obj).text(monthArr[idx] + '월')
    })
    var optionYearArr = $(optionDateBox).find('.year')
    $.each(optionYearArr, function(idx, obj){
        $(obj).text(yearArr[idx])
    })


    //when 유연한일정 여행날짜 1~12월 클릭 border 굵기 이벤트
    var optionItemArr = $(optionDateBox).find('.option-item')
    var optionImgArr = $(optionDateBox).find('.calendar-image')
    $.each(optionItemArr, function(idx, obj){
        $(obj).click(function(){
            $(this).toggleClass('selected')
            if($(this).hasClass('selected')){
                $(optionImgArr[idx]).css({'background': "url('./src/img/airbnb/calendar_picked.png')"})
                $(optionImgArr[idx]).css({'background-repeat': "no-repeat"})
                $(optionImgArr[idx]).css({'background-position': "50%"})
            }else{
                $(optionImgArr[idx]).css({'background': "url('./src/img/airbnb/calendar.png')"})
                $(optionImgArr[idx]).css({'background-repeat': "no-repeat"})
                $(optionImgArr[idx]).css({'background-position': "50%"})
            }
        })
        $(obj).mousedown(function(){
            $(this).addClass('animated');
        })
        $(obj).mouseup(function(){
            $(this).removeClass('animated');
        })
    })


    //who + - 더하기 빼기
    let minus = $('.airbnb-main .age .minus')
    let count = $('.airbnb-main .age .count')
    let plus = $('.airbnb-main .age .plus')
    let countNum = [0, 0, 0, 0];
    
    $.each(plus, function(i, object){
        $(object).click(function(){
            countNum[i]++
            $(count[i]).text(countNum[i])
        })
    })
    $.each(minus, function(i, object){
        $(object).click(function(){
            if(countNum[i] <= 0){
                return;
            }else{
                countNum[i]--
                $(count[i]).text(countNum[i])
            }
        })
    })

    //필터아이콘 클릭 여닫기
   
    $('.airbnb-main .filter-wrap').css('top', filterWrapHeight)

    $('.filter-icon').click(function(){
        $('.filter-wrap').show()
        $('.airbnb-main .gnb-bottom').hide()
        $('.airbnb-main .filter-gnb-bottom').show()
        $('.airbnb-main .bar-right .dim').show()
        $('.filter-wrap').animate({'top' : '15px'})
        $('.airbnb-main .filter-icon-wrap-pc').hide()
    })
    $('.filter-wrap .xbutton').click(function(){
        $('.filter-wrap').animate({'top' : filterWrapHeight})
        $('.airbnb-main .bar-right .dim').hide()
        $('.airbnb-main .gnb-bottom').css({'display':'flex'})
        $('.airbnb-main .filter-gnb-bottom').hide()
        $('.airbnb-main .filter-icon-wrap-pc').show()
        $('.filter-wrap').removeClass('pc-versioned')
        $('.airbnb-main .filter-gnb-bottom').removeClass('pc-versioned')

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
    $('.airbnb-main .minimum-price').attr('value', mini);
    $('.airbnb-main .maximum-price').attr('value', max);

    //필터내 침실과침대 색깔바꾸기
    var bedRoomIcons = $('.airbnb-main .bedroom a')
    var bedIcons = $('.airbnb-main .bed a')
    var bathRoomIcons = $('.airbnb-main .bathroom a')
    for(var i = 0; i < bedRoomIcons.length; i ++){
        $(bedRoomIcons[i]).click(function(){
                $(this).addClass('selected');
                $(bedRoomIcons).not($(this)).removeClass('selected')
        })
        $(bedIcons[i]).click(function(){
                $(this).addClass('selected');
                $(bedIcons).not($(this)).removeClass('selected')
        })
        $(bathRoomIcons[i]).click(function(){
                $(this).addClass('selected');
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
        
        $('.building-option').removeClass('clicked')

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
        $('.filter-wrap').animate({'top' : filterWrapHeight})

    })

    //option-bar 이미지 넣기
    var optionImageArr = document.querySelectorAll('.option-image');
    for(var i = 0; i < optionImageArr.length; i++){
        if(i < 10){
            optionImageArr[i].style.backgroundImage = 
            `url('./src/img/airbnb/option_bar_${i}.png')`
        }else if(i >= 10){
            optionImageArr[i].style.backgroundImage = 
            `url('./src/img/airbnb/option_bar_${i - 10}.png')`
        }
    };

    
//airbnb-main end--------------------------------------------

//airbnb-wishlist start--------------------------------------------
    $('.login-button').click(function(){
        $('.load-login').css('display', 'block')
        $('.load-login').animate({'bottom': '0px'})
        $('.airbnb-wishlist .dim-class').addClass('dim')
        $('.gnb-bottom').addClass('hide')
        
    });
    $('.load-login .xbutton').click(function(){
        $('.load-login').css('display', 'none')
        $('.load-login').animate({'bottom': filterWrapHeight})
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



