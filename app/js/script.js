$(document).ready(function() {
    var startHeight = $("#navbar").height();
    width = $(window).width();    
    $(window).resize(function() {
        width = $(window).width();
    });
    $("a").on('click', function(event) {


        // Prevent default anchor click behavior
        event.preventDefault();
        if (width < 768) {
        $('.navbar-toggle').click();
            
        }
        // Store hash
        var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - startHeight
            }, 800, function(){window
        
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
    });
});