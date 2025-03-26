document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu Functionality
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileMenu = document.querySelector('.mobile-menu');
    const backdrop = document.querySelector('.backdrop');

    function openMobileMenu() {
        mobileMenu.classList.remove('-translate-y-full');
        backdrop.classList.remove('opacity-0', 'pointer-events-none');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        mobileMenu.classList.add('-translate-y-full');
        backdrop.classList.add('opacity-0', 'pointer-events-none');
        document.body.style.overflow = '';
    }

    mobileMenuButton.addEventListener('click', openMobileMenu);
    mobileMenuClose.addEventListener('click', closeMobileMenu);
    backdrop.addEventListener('click', closeMobileMenu);

    // Close mobile menu when clicking menu links
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Handle escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });


});

$(document).ready(function () {


    $('#part1-btn').click(function () {
        $(this).addClass('active');
        $('#part2-btn').removeClass('active');
        $('#part3-btn').removeClass('active');
        $('#part1').show();
        $('#part2').hide();
        $('#part3').hide();
    });

    $('#part2-btn').click(function () {
        $(this).addClass('active');
        $('#part1-btn').removeClass('active');
        $('#part3-btn').removeClass('active');
        $('#part1').hide();
        $('#part3').hide();
        $('#part2').show();
    });

    $('#part3-btn').click(function () {
        $(this).addClass('active');
        $('#part1-btn').removeClass('active');
        $('#part2-btn').removeClass('active');
        $('#part1').hide();
        $('#part2').hide();
        $('#part3').show();
    });


    $('.our-sevices').slick({
        dots: true,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.our-products').slick({
        dots: false,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.our-products-custom-prev'),
        nextArrow: $('.our-products-custom-next'),
        adaptiveHeight: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }

        ]

    });

    $('.our-editions').slick({
        dots: false,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.our-editions-custom-prev'),
        nextArrow: $('.our-editions-custom-next'),
        adaptiveHeight: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }

        ]
    });

    $('.our-goals').slick({
        dots: true,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.our-core-values').slick({
        dots: true,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });



    $('.template1').slick({
        dots: false,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $('.template1-custom-prev'),
        nextArrow: $('.template1-custom-next'),
        adaptiveHeight: false,
        responsive: [
            {
                breakpoint: 776,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }

        ]
    });

});