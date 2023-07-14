(function($){
    $(function(){
        /*
            SCROOL TO SECTION HOME
        */
        
        $(".jq--scrool-hore").click(function(){
             $("html, body").animate({scrollTop: $("#hore").offset().top}, 1000);
        });
        
        $(".jq--scrool-referencie").click(function(){
            $("html, body").animate({scrollTop: $(".jq--referencie").offset().top}, 2000);
        });
        
         $(".jq--scrool-fotogalery").click(function(){
            $("html, body").animate({scrollTop: $(".jq--fotogalery").offset().top}, 2000);
        });
        
        
        $(".jq--scrool-kontakt").click(function(){
            $("html, body").animate({scrollTop: $(".jq--kontakt").offset().top}, 2000);
        });
        
        $(".jq--scrool-aboutus").click(function(){
            $("html, body").animate({scrollTop: $(".jq--aboutus").offset().top}, 1000);
        });
        
        
        
        /*
            SCROOL TO SECTION MENU
        */
        
        $(".jq--scrool-hore").click(function(){
             $("html, body").animate({scrollTop: $("#hore").offset().top}, 1000);
        });
        
         
        
        
        
        
        
        /*
            MOBILE NAVIGATION   
        */
        
        
        $(".jq--nav-icon").click(function(){
            $(".nav-back").slideToggle();
            $(".mobile-nav-back").fadeToggle();
            $("nav ul").fadeToggle();
            
        });
        
        
        
        
        
        
        
        
        
        /* CHANGE BURGER TO CROSS VICE VERSA */
         
        $(".jq--img-hamburger").click(function(){
            
            if($(".jq--img-hamburger").attr("src") == "../img/hamburgerMenu.png")
                {
                    $($(".jq--img-hamburger").attr("src","../img/crossMenu.png"));
                }
            else
                {
                     $($(".jq--img-hamburger").attr("src","../img/hamburgerMenu.png"));
                }
            
        });
        
    });
})(jQuery);
























