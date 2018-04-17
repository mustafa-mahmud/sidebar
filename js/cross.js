(function ($) {
    $(function () {
        $(".cross").on({
            mouseenter:function(){
                var visible=$(".line2:visible").length;
                if(visible>0){
                    $("div[class^='line']").addClass("classHover");
                }
            },
            mouseleave:function(){
                $("div[class^='line']").removeClass("classHover");
            }
        });
        $(".cross").on("click", function () {
            let line2 = $(".line2:visible");
            if (line2.length > 0) {
                $(".line2").css({"display": "none"});
                $(".line1").addClass("line1Cross");
                $(".line3").addClass("line3Cross");
            } else {
                $(".line2").css({"display": "block"});
                $(".line1").removeClass("line1Cross");
                $(".line3").removeClass("line3Cross");
            }
        });
    });
}(jQuery));