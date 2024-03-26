gsap.registerPlugin(ScrollTrigger);

// intro 효과
setTimeout(() => {
    $('.intro').addClass('hide');
  }, 500);


// 스크롤 효과
let lastScroll = 0;

$(window).scroll(function(){
    curr = $(this).scrollTop();
    if (curr > lastScroll) {
        $('.fix-menu').addClass('hide');
        $('.fix-menu').removeClass('open');
    } else{
        $('.fix-menu').removeClass('hide');
    }
    lastScroll = curr;
})

// title 세팅
const headTxt = new SplitType('.title h2', { types: 'words, chars', });

// nav
$('.btn-open').click(function(){
    $(this).parent().parent().parent().toggleClass('open');
});
$('.btn-close').click(function(){
    $('.fix-menu').removeClass('open');
});

$('.nav-list a[href*="#"], #ft-side a[href*="#"]').on('click', function(e){
    e.preventDefault();
    var hdHeight = $("#header").height();	
    $('html, body').animate({ 
        scrollTop: $($(this).attr('href')).offset().top - hdHeight }, 500, 'linear');
    $('.fix-menu').removeClass('open');
});


$(document).click(function(e){
    if ($('.fix-menu').has(e.target).length === 0) {
        $('.fix-menu').removeClass('open');
    }
});

// title 모션
gsap.utils.toArray('.sc-common .title').forEach(element => {
    item01 = gsap.timeline({
        scrollTrigger:{
            trigger:element,
            start:"0% 80%",
            end:"100% 0%",
            toggleActions:"play reverse play reverse",
        },
    })
    item01.from(element.querySelector('.sc-common .title h2'),1,{ scale:1.2},'a');
    item01.from(element.querySelectorAll('.sc-common .title .char'),1,{
        opacity:0,
        stagger:{
            from:"random",
            each:0.01,
        }
    },'a');    
});

gsap.utils.toArray('.sc-common02 .title').forEach(element => {
    item02 = gsap.timeline({
        scrollTrigger:{
            trigger:element,
            start:"0% 80%",
            end:"100% 0%",
            toggleActions:"play reverse play reverse",
        },
    })
    item02.from(element.querySelector('.sc-common02 .title h2'),1,{ scale:1.2},'a');
    item02.from(element.querySelectorAll('.sc-common02 .title .char'),1,{
        opacity:0,
        stagger:{
            from:"random",
            each:0.05,
        }
    },'a');    
});

// work, contact 효과
let md = gsap.matchMedia();

md.add("(min-width: 640px)", () => {
    work = gsap.timeline({
        scrollTrigger:{
            trigger:".sc-work",
            start:"0 80%",
            end:"100% 100%",
            scrub:4,
        },
    })
    work.set('.sc-work .work-list > li:nth-child(2n)',{yPercent:20});
    work.to('.sc-work .work-list > li:nth-child(2n)',{yPercent:-20});

    marqueeTl = gsap.timeline({
        scrollTrigger:{
            trigger:".sc-service",
            start:"0 100%",
            end:"100% 0%",
            scrub:0
        },
    })
    marqueeTl.to('.row .marquee-inner',{xPercent:-10},'a')
    marqueeTl.to('.reverse .marquee-inner',{xPercent:10},'a')
});

//career title 모션
careerTitle = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-service .title",
        start:"0 80%",
        end:"100% 0%",
        toggleActions:"play reverse play reverse"
    },
})
careerTitle.from('.sc-service .title .char',{
    opacity:0,
    yPercent:100,
    stagger:{
        from:"random",
        each:0.1,
    }
})

// contact 모션
let ct = gsap.matchMedia();

ct.add("(min-width: 1400px)", () => {
    work = gsap.timeline({
        scrollTrigger:{
            trigger:".sc-business",
            start:"0% 50%",
            end:"100% 50%",
            scrub:4,
        },
    })
    work.from('.sc-business .business-list > li:nth-child(2)',{yPercent:10}, 'a');
    work.from('.sc-business .business-list > li:nth-child(3)',{yPercent:20}, 'a');
    work.from('.sc-business .business-list > li:nth-child(4)',{yPercent:30}, 'a');
    work.to('.sc-business .business-list > li:nth-child(1)',{yPercent:30}, 'b');
    work.to('.sc-business .business-list > li:nth-child(2)',{yPercent:20}, 'b');
    work.to('.sc-business .business-list > li:nth-child(3)',{yPercent:10}, 'b');
    work.to('.sc-business .business-list > li:nth-child(4)',{yPercent:0}, 'b');
});

ct.add("(max-width: 1399px) and (min-width: 640px)", () => {
    work = gsap.timeline({
        scrollTrigger:{
            trigger:".sc-business",
            start:"0% 50%",
            end:"100% 50%",
            scrub:4,
        },
    })
    work.set('.sc-business .business-list > li:nth-child(2n)',{yPercent:20});
    work.to('.sc-business .business-list > li:nth-child(2n)',{yPercent:-20});
});

// 현재시간
function displayTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    var timeString = hours + ':' + minutes + ':' + seconds;  
    document.getElementById('time').textContent = timeString;
}
setInterval(displayTime, 1000);

// 코드리뷰버튼 효과
$('.container .sc-work .btn-common a').mousemove(function(e){
    x=e.offsetX;
    y=e.offsetY;
    gsap.to($(this).find('.box'),{
        x:(x-$(this).width()/2)/3,
        y:(y-$(this).height()/2)/3
    })
})

$('.container .sc-work .btn-common a').mouseleave(function(){
    gsap.to($(this).find('.box'),{
        x:0,
        y:0
    })
})