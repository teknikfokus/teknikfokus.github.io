$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 200) {
        if (!$("#navbar").hasClass("sticky")) {
            $("#navbar").addClass("sticky");
        }
    } else if (scroll <= 0) {
        if ($("#navbar").hasClass("sticky")) {
            $("#navbar").removeClass("sticky");
        }
    }
}); //missing );