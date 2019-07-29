$(document).ready(function ($) {

    $('.barra-img').mousemove(function (event) {

        var mouseX = event.pageX;
        var mouseY = event.pageY;
        // console.log(mouseX, mouseY);

        var bordeIzquierdo = Math.floor(($(".barra-img").width()  * 415) / 1366);
        var bordeDerecho = Math.floor(($(".barra-img").width()  * 950) / 1366);

        // 100 es 85 + 15 tamaño de la imagen + esquina izquierda
        var widthDuffMan = $("#moe-img").width();
        var mitadwidthDuffMan = Math.floor($("#moe-img").width() / 2);
    
        // Caso 1: el mouse esta más a la izquierda del borde de la barra
        if (mouseX < bordeIzquierdo + mitadwidthDuffMan) {
            $("#moe-img").css("left", bordeIzquierdo)

        // Caso 2: el mouse está más a la derecha del borde de la barra
        } else if (mouseX > bordeDerecho - mitadwidthDuffMan) {
            $("#moe-img").css("left", bordeDerecho - widthDuffMan);

        // Caso 3: el mouse está en el centro de la  barra
        } else {
            $("#moe-img").css("left", mouseX - mitadwidthDuffMan)// 85 es la mitad de la imagen
        }
    });


    function tamDuffMan() {

        // Calculo del tamaño de duffman
        // Se hace una regla de tres respecto a la imagen de fondo y se redondea hacia abajo
        // para calcular el nuevo tamaño del duffman
        // 1366px 240px si la img de fondo mide 1366 entonces duffman mide 240
        // 768px 135px
        var barraWidth = $(".barra-img").width();
        var widthDuffMan = Math.floor((barraWidth * 200) / 1366)
        $("#moe-img").css("width", widthDuffMan);

        // Calculo de la cantidad de espacio hacia abajo del duffman
        // Se hace una regla de tres respecto a la imagen de fondo y se redondea hacia abajo
        // para calcular la cantidad de pixeles que hay que empujar el duffman hacia arriba y ponerlo
        // en la barra
        // 1366px 645px si la img de fondo mide 1366 entonces duffman mide 240
        // 320px 150px
        var bottomDuffMan = Math.floor((barraWidth * 145) / 1366)
        $("#moe-img").css("top", bottomDuffMan);

        // Centrado de duffman
        var centro = Math.floor(($(".barra-img").width() + $("#moe-img").width())  / 2);
        $("#moe-img").css("left", centro - widthDuffMan)
    }

    tamDuffMan();

    $(window).resize(tamDuffMan);

}); 