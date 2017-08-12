$(document).ready(function() {
    var startHeight = $("#navbar").height();
    width = $(window).width();    
    check_size(width);
    $(window).resize(function() {
        width = $(window).width();
        check_size(width);       
    });
    $(".navbar a").on('click', function(event) {


        // Prevent default anchor click behavior
        event.preventDefault();
        if (width < 768) {
        $('.navbar-toggle').click();
        $('#lost-logo').css("visibility","visible");
        $('#lost-banner').css("visibility","none");
        }
        // Store hash
        var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - startHeight
            }, 800, function(){
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
    });
});

function check_size(width) {
    if (width < 768) {
        $('#lost-logo').show();
        $('#lost-banner').hide();
    } else {
        $('#lost-logo').hide();
        $('#lost-banner').show();
    }
}