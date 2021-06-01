    $(function () {
        var index = 1
    var run = 0,
        heading = $("h1"),
        timer;

    $("#start").click(function () {
        var list = $("#list").val().replace(/ +/g, " ").replace(/^ | $/g, "").split(" ");
        if (!run) {
            heading.html(heading.html().replace("公平   公正   公开", "看看会是谁?"));
            heading.html(heading.html().replace("就是你了!", "看看会是谁?"));
            $(this).val("停止");
            timer = setInterval(function () {
                var r = Math.ceil(Math.random() * list.length),
                    item = list[r - 1];
                $("#what").html(item);
                var rTop = Math.ceil(Math.random() * $(document).height()),
                    rLeft = Math.ceil(Math.random() * ($(document).width() - 50)),
                    rSize = Math.ceil(Math.random() * (37 - 14) + 14);
                $("<span class='temp'></span>").html(item).hide().css({
                    "top": rTop,
                    "left": rLeft,
                    "color": "rgba(0,0,0,." + Math.random() + ")",
                    "fontSize": rSize + "px"
                }).appendTo("body").fadeIn("slow", function () {
                    $(this).fadeOut("slow", function () {
                        $(this).remove();
                    });
                });
            }, 50);
            
            

            run = 1;
        } else {
           heading.html(heading.html().replace("看看会是谁?", "就是你了!"));
            $(this).val("再选一次");
            $("p#info").text(function(i,origText){
                return  origText +  index++ + ":" + $("#what").html() + " "
              });
            clearInterval(timer);
            run = 0;
        };
    });

    document.onkeydown = function enter(e) {
        var e = e || event;
        if (e.keyCode == 13) $("#start").trigger("click");
    };
});