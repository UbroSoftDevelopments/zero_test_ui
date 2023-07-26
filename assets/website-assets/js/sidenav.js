(function (jQuery) {

    function setMenuEvent() {
        if (jQuery(window).width() <= 991) {
            var Sidemenu = function () {
                this.jQuerymenuItem = jQuery('.main-nav a');
            };
            function init() {
                var jQuerythis = Sidemenu;
                document.querySelectorAll('.main-nav a').forEach(function (element) {
                    element.addEventListener('click', function (e) {
                        if (jQuery(this).parent().hasClass('has-submenu')) {
                            e.preventDefault();
                            if (!jQuery(this).hasClass('submenu')) {
                                jQuery(this).addClass('submenu');
                                jQuery(this).next('ul').show();
                            } else if (jQuery(this).hasClass('submenu')) {
                                jQuery(this).removeClass('submenu');
                                jQuery(this).next('ul').hide();
                            }
                        } else {
                            jQuery('html').removeClass('menu-opened');
                            jQuery('.sidebar-overlay').removeClass('opened');
                            jQuery('.main-wrapper').removeClass('slide-nav');
                            jQuery('.header-fixed').addClass('disp');
                        }

                    });
                })
            }
            init();
        }
    }
    jQuery(document).ready(function () {
        setMenuEvent()
    })
})(jQuery)

