$(document).ready(function () {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    setInterval(function () {
        //elige un tamaño de burbuja al azar entre los rangos 6,15 pixeles
        var tamBurbuja = getRandomInt(6, 20)

        // los valores de aparicion de las burbujas se tienen que ajustar a mano porque dependen de la imagen y su tamaño
        var inicioAparicionBurbuja = 67;
        var finAparicionBurbuja = $(".burbujas").width() - 115;

        var offsetBurbuja = getRandomInt(inicioAparicionBurbuja, finAparicionBurbuja)// se crean los valores que empujan desde la izq las burbujas a lo largo del texto, el tamaño del texto esta dado por el ancho contenedor con width

        $(".burbujas").append('<div class="burbuja-individual" style="left:' + offsetBurbuja + 'px; width: ' + tamBurbuja + 'px; height: ' + tamBurbuja + 'px"></div>')


        $(".burbuja-individual").animate({
            "bottom": "100%",
            "opacity": "-=0.3" // reducir la opacidad 

        }, 4000, function () {
            $(this).remove()
        })



    }, 150)

})  