$(document).ready(function ($) {
    $(".header").mousemove(function (event) {
        var msg = event.pageX + ", " + event.pageY;
        // console.log(msg)

        // 100 es 85 + 15 tamaño de la imagen + esquina izquierda
        if (event.pageX < 100) {
            $("#moe-img").css("left", "15px")

            //calculado a mano 
        } else if (event.pageX > $(window).width() - 200) {
            $("#moe-img").css("left", $(window).width() - 200)

        } else {
            $("#moe-img").css("left", event.pageX - 85)// 85 es la mitad de la imagen
        }

    });

}); 