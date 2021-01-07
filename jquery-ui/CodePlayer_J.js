
        
    function updatePage(){
            
            $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + 
                                                      $("#cssp").val() + "</style></head><body>" +
                                                      $("#htmlp").val() + "</body></html>");
            
            document.getElementById("outputp").contentWindow.eval($("#javascriptp").val());
            
        }
            
         $(".toggle").hover(function(){
             $(this).addClass("highlighted");
             
         }, function(){
             $(this).removeClass("highlighted");
             
         });
            
        $(".toggle").click(function(){
            $(this).toggleClass("active");
            $(this).removeClass("highlighted");
            
            var pid = $(this).attr("id") + "p";
            
            $("#" + pid).toggleClass("hidden");
            
            var NumberOfPanels = 4 - $(".hidden").length;
            
            
            $(".pannel").width(($(window).width() / NumberOfPanels) - 10);
            updatePage();
            
        });
            
        $(".pannel").height($(window).height() - $("#header").height() - 15);
        $(".pannel").width(($(window).width() / 2) - 10);
            
        $("iframe").contents().find("html").html($("#htmlp").val());
            
        $("textarea").on('change keyup paste', function() {
            
            updatePage();
            
        });
                
