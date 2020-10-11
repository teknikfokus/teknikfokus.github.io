$(document).ready(() => {
    $(window).scroll(function() {    
        let scroll = $(window).scrollTop();

        if (scroll >= 200) {
            if (!$("#navbar").hasClass("sticky")) {
                $("#navbar").addClass("sticky");
            }
        } else if (scroll <= 0) {
            if ($("#navbar").hasClass("sticky")) {
                $("#navbar").removeClass("sticky");
            }
        }
    });

});