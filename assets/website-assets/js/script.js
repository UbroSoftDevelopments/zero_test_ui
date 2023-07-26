(function (jQuery) {
    "use strict";
    if (jQuery(window).width() > 767) {
        if (jQuery('.theiaStickySidebar').length > 0) {
            jQuery('.theiaStickySidebar').theiaStickySidebar({ additionalMarginTop: 70 });
        }
    }
    if (jQuery('.toggle-password').length > 0) {
        jQuery(document).on('click', '.toggle-password', function () {
            jQuery(this).toggleClass("feather-eye feather-eye-off");
            var input = jQuery(".pass-input");
            if (input.attr("type") == "password") {
                input.attr("type", "text");
            } else {
                input.attr("type", "password");
            }
        });
    }

    jQuery('.course-share .fa-heart').on('click', function (e) {
        e.preventDefault(); jQuery(this).toggleClass('color-active');
    });
    if (jQuery('#edit-rating').length > 0) {
        jQuery('#edit-rating').on('click', function () {
            jQuery('.publish-rate').toggle('1000');
            jQuery('.stip-grp').toggle('1000');
        });
    }
    if (jQuery('.course-count .counterUp').length > 0) {
        jQuery('.course-count .counterUp, .course-inner-content h4 span, .rate-head span').counterUp({
            delay: 15, time: 1500
        });
    }

    jQuery(document).on('click', '#mobile_btn', function () {
        jQuery('.header-fixed').append('<div class="sidebar-overlay"></div>');
        jQuery().on('click', '.header-fixed', function () {
            jQuery('html').removeClass('menu-opened');
            jQuery(this).removeClass('opened');
            jQuery('main-wrapper').removeClass('slide-nav');
        })
        jQuery('main-wrapper').removeClass('slide-nav');
        jQuery('.header-fixed').addClass("sidebar-overlay");
        jQuery('main-wrapper').toggleClass('slide-nav');
        jQuery('.sidebar-overlay').toggleClass('opened');
        jQuery('html').addClass('menu-opened');
        return false;
    });

    jQuery(document).click(function (event) {
        var side_nav = event.target.closest('.main-menu-wrapper');
        if (!side_nav) {
            jQuery('html').removeClass('menu-opened');
            jQuery('.sidebar-overlay').removeClass('opened');
            jQuery('.main-wrapper').removeClass('slide-nav');
            jQuery('.header-fixed').addClass('disp');
        }
    });

    // jQuery(document).on('click', '.sidebar-overlay', function () {
    //     jQuery('html').removeClass('menu-opened');
    //     jQuery(this).removeClass('opened');
    //     jQuery('main-wrapper').removeClass('slide-nav');
    // });
    jQuery(document).on('click', '#menu_close', function () {
        // debugger
        jQuery('html').removeClass('menu-opened');
        jQuery('.sidebar-overlay').removeClass('opened');
        jQuery('main-wrapper').removeClass('slide-nav');
        jQuery('.header-fixed').addClass('disp');
    });
    if (jQuery('.select').length > 0) {
        jQuery('.select').select2({ minimumResultsForSearch: -1, width: '100%' });
    }
    jQuery(document).ready(function () {
        jQuery('[data-bs-toggle="tooltip"]').tooltip();
    });
    if (jQuery('.owl-carousel.mentoring-course').length > 0) {
        var owl = jQuery('.owl-carousel.mentoring-course');
        owl.owlCarousel({
            margin: 25, nav: false, nav: true, loop: true, responsive: {
                0: { items: 1 },
                768: { items: 1 }, 1170: { items: 1 }
            }
        });
    }
    if (jQuery('.owl-carousel.trending-course').length > 0) {
        var owl = jQuery('.owl-carousel.trending-course');
        owl.owlCarousel({
            margin: 24, nav: false, nav: true, loop: true, responsive:
                { 0: { items: 1 }, 768: { items: 2 }, 1170: { items: 3 } }
        });
    }



    if (jQuery('.owl-carousel.lead-group-slider').length > 0) {
        var owl = jQuery('.owl-carousel.lead-group-slider');
        owl.owlCarousel({
            margin: 24, nav: false,
            nav: true, loop: true, autoplay: true,
            autoplaySpeed: 2000,
            responsive: { 0: { items: 1 }, 768: { items: 4 }, 1170: { items: 6 } }
        });
    }



    if (jQuery('.owl-carousel.instructors-course').length > 0) {
        var owl = jQuery('.owl-carousel.instructors-course');
        owl.owlCarousel({
            margin: 24,
            nav: false,
            nav: true, loop: true,
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                1170: { items: 4 }
            }
        });
    }
    if (jQuery('.owl-carousel.blogs-slide').length > 0) {
        var owl = jQuery('.owl-carousel.blogs-slide');
        owl.owlCarousel({
            margin: 24,
            nav: false,
            nav: true,
            loop: true,
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                1170: { items: 4 }
            }
        });
    }
    if (jQuery('.owl-carousel.login-slide').length > 0) { var owl = jQuery('.owl-carousel.login-slide'); owl.owlCarousel({ margin: 24, nav: false, nav: true, loop: true, responsive: { 0: { items: 1 }, 768: { items: 1 }, 1170: { items: 1 } } }); }
    if (jQuery('.mentor-testimonial.lazy').length > 0) { jQuery(".mentor-testimonial.lazy").slick({ lazyLoad: 'ondemand', infinite: true }); }
    jQuery(window).scroll(function () { var sticky = jQuery('.scroll-sticky'), scroll = jQuery(window).scrollTop(); if (scroll >= 100) sticky.addClass('add-header-bg'); else sticky.removeClass('add-header-bg'); }); if (jQuery('.countdown-container').length > 0) {
        const daysEl = document.getElementById("days"); const hoursEl = document.getElementById("hours"); const minsEl = document.getElementById("mins"); const newYears = "1 Jan 2023"; function countdown() { const newYearsDate = new Date(newYears); const currentDate = new Date(); const totalSeconds = (newYearsDate - currentDate) / 1000; const days = Math.floor(totalSeconds / 3600 / 24); const hours = Math.floor(totalSeconds / 3600) % 24; const mins = Math.floor(totalSeconds / 60) % 60; daysEl.innerHTML = days; hoursEl.innerHTML = formatTime(hours); minsEl.innerHTML = formatTime(mins); }
        function formatTime(time) { return time < 10 ? `0jQuery{time}` : time; }
        countdown(); setInterval(countdown, 1000);
    }
    function animateElements() {
        jQuery('.circle-bar1').each(function () {
            var elementPos = jQuery(this).offset().top;
            var topOfWindow = jQuery(window).scrollTop();
            var percent = jQuery(this).find('.circle-graph1').attr('data-percent');
            var animate = jQuery(this).data('animate');
            if (elementPos < topOfWindow + jQuery(window).height() - 30 && !animate) {
                jQuery(this).data('animate', true);
                jQuery(this).find('.circle-graph1').circleProgress({ value: percent / 100, size: 400, thickness: 40, startAngle: -1.6, fill: { color: '#159f46' } });
            }
        });
    }
    if (jQuery('.circle-bar').length > 0) {
        animateElements();
    }

    jQuery(window).scroll(animateElements);
    jQuery('.digit-group').find('input').each(function () {
        jQuery(this).attr('maxlength', 1);
        jQuery(this).on('keyup', function (e) {
            var parent = jQuery(jQuery(this).parent());
            if (e.keyCode === 8 || e.keyCode === 37) {
                var prev = parent.find('input#' + jQuery(this).data('previous'));
                if (prev.length) { jQuery(prev).select(); }
            }
            else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
                var next = parent.find('input#' + jQuery(this).data('next'));
                if (next.length) { jQuery(next).select(); }
                else { if (parent.data('autosubmit')) { parent.submit(); } }
            }
        });
    });
    jQuery('.digit-group input').on('keyup', function () {
        var self = jQuery(this);
        if (self.val() != '') {
            self.addClass('active');
        }
        else {
            self.removeClass('active');
        }
    });
    if (jQuery('.main-wrapper .aos').length > 0) {
        AOS.init({ duration: 1200, once: true });
    }
    function resizeInnerDiv() {
        var height = jQuery(window).height();
        var header_height = jQuery(".header").height();
        var footer_height = jQuery(".footer").height();
        var setheight = height - header_height;
        var trueheight = setheight - footer_height;
        jQuery(".content").css("min-height", trueheight);
    }
    if (jQuery('.content').length > 0) { resizeInnerDiv(); }
    jQuery(window).resize(function () {
        if (jQuery('.content').length > 0) {
            resizeInnerDiv();
        }
    });
    jQuery(document).ready(function () {
        let progressVal = 0; let businessType = 0;
        jQuery(".next_btn").click(function () {
            jQuery(this).parent().parent().parent().next().fadeIn('slow');
            jQuery(this).parent().parent().parent().css({ 'display': 'none' });
            progressVal = progressVal + 1;
            jQuery('.progress-active').removeClass('progress-active').addClass('progress-activated').next().addClass('progress-active');
        });
        jQuery(".prev_btn").click(function () {
            jQuery(this).parent().parent().parent().prev().fadeIn('slow');
            jQuery(this).parent().parent().parent().css({ 'display': 'none' });
            progressVal = progressVal - 1;
            jQuery('.progress-active').removeClass('progress-active').prev().removeClass('progress-activated').addClass('progress-active');
        });
    });
    if (jQuery('#editor').length > 0) {
        ClassicEditor.create(document.querySelector('#editor'),
            {
                toolbar: {
                    items: ['heading', '|', 'fontfamily', 'fontsize', '|', 'alignment', '|', 'fontColor', 'fontBackgroundColor', '|', 'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|', 'link', '|', 'outdent', 'indent', '|', 'bulletedList', 'numberedList', 'todoList', '|', 'code', 'codeBlock', '|', 'insertTable', '|', 'uploadImage', 'blockQuote', '|', 'undo', 'redo'],
                    shouldNotGroupWhenFull: true
                }
            }).then(editor => {
                window.editor = editor;
            }).catch(err => {
                console.error(err.stack);
            });
    }
})(jQuery);