$(document).ready(function () {
    $('.slider-2').slick({
        arrows:false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        initialSlide: 1,
        adaptiveHeight: true
    });
    $('.slider-1').slick({
        arrows:true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        initialSlide: 0,
        adaptiveHeight: true
    });
    var scrl = $('#button');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            scrl.addClass('show');
        } else {
            scrl.removeClass('show');
        }
    });

    scrl.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });

    var modal = document.getElementById("myModal");


    var btn = document.getElementById("myBtn");


    var span = document.getElementsByClassName("close")[0];


    btn.onclick = function() {
        modal.style.display = "block";
    }


    span.onclick = function() {
        modal.style.display = "none";
    }


    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
})