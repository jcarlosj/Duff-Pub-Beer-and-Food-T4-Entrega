$(document).ready(function ($) {
        
    $( '.barra' ) .mousemove( function ( event ) {
        
        let bar = $( '.barra' ),
            mouseX, mouseY,
            barX = bar .offset() .left,
            barY = bar .offset() .top;

        mouseX = event .pageX - barX;
        mouseY = event .pageY - barY;
        console .log( mouseX, mouseY );
        
        // 100 es 85 + 15 tamaño de la imagen + esquina izquierda
        var data = 50;
        if ( mouseX < data ) {
            $("#moe-img").css("left", "5px")

            //calculado a mano 
        } else if (mouseX > $( '.barra' ) .width() - data ) {
            $("#moe-img").css("left", $( '.barra' ).width() - data );
        } else {
            $("#moe-img").css("left", mouseX - 85)// 85 es la mitad de la imagen
        }
    });

}); 