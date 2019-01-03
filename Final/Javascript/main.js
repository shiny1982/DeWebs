$(function(){
    $('.navbar').data('size','big');
});

$(window).scroll(function(){
    if($(document).scrollTop() > 0)
    {
        if($('.navbar').data('size') == 'big')
        {
            $('.navbar').data('size','small');
            $('.navbar').stop().animate({
                height:'49px'
            },200);
            $('.logo').stop().animate({
                height:'49px'
            },200);
            $('.logo').stop().animate({
                width:'78px'
            },200);
            $('.logo img').stop().animate({
                height:'46px'
            },200);
            $('.logo img').stop().animate({
                width:'78px'
            },200);
            $('.dropdown, .dropdown a').stop().animate({
                height:'49'
            },200);
            $('.dropdown').stop().animate({
                width:'100px'
            },200);
            $('.dropdown a').stop().animate({
                width:'68px'
            },200);
            $('.current, .current a').stop().animate({
                height:'49'
            },200);
            $('.current').stop().animate({
                width:'100px'
            },200);
            $('.current a').stop().animate({
                width:'68px'
            },200);
            $('h1.welcome').stop().animate({
                opacity:0
            },200);
            $('hr.welcome').stop().animate({
                opacity:0
            },200);
            $('.dropdown-content').stop().animate({
                top:50
            },200);
            $('div.welcome').stop().animate({
                height:'250px'
            },200);
            $('div.contentLink').stop().animate({
                height:'40%'
            });
            $('img.contentLink').stop().animate({
                height:'98%'
            });
            $('.bigolmap').stop().animate({
                top:'0px'
            });
        }
    }
    else
    {
        if($('.navbar').data('size') == 'small')
        {
            $('.navbar').data('size','big');
            $('.navbar').stop().animate({
                height:'100px'
            },200);
            $('.logo').stop().animate({
                height:'100px'
            },200);
            $('.logo').stop().animate({
                width:'160px'
            },200);
            $('.logo img').stop().animate({
                height:'98px'
            },200);
            $('.logo img').stop().animate({
                width:'160px'
            },200);
            $('.dropdown, .dropdown a').stop().animate({
                height:'100px'
            },200);
            $('.dropdown').stop().animate({
                width:'150px'
            },200);
            $('.dropdown a:not(.about)').stop().animate({
                width:'118px'
            },200);
            $('.current, .current a').stop().animate({
                height:'100px'
            },200);
            $('.current').stop().animate({
                width:'150px'
            },200);
            $('.current a').stop().animate({
                width:'118px'
            },200);
            $('h1.welcome').stop().animate({
                opacity:1
            },200);
            $('hr.welcome').stop().animate({
                opacity:1
            },200);
            $('.dropdown-content').stop().animate({
                top:100
            },200);
            $('div.welcome').stop().animate({
                height:'500px'
            },200);
            $('div.contentLink').stop().animate({
                height:'20%'
            });
            $('img.contentLink').stop().animate({
                height:'95%'
            });
            $('.bigolmap').stop().animate({
                top:'100px'
            });
        }
    }
});

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
