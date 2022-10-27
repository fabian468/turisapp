var imagenes = ["img/imagen1.jpg", "img/imagen2.jpg", "img/imagen3.jpg"]
window.addEventListener('load', () => {
    var i = 0

    function cambioImagen() {

        document.querySelector('.fondo').src = imagenes[i]
        if (i < 2) {
            i++

            if (i === 2) {
                document.querySelector('.cambioColor').style.color = "#572364"
            } else {
                document.querySelector('.cambioColor').style.color = "white"
            }
        } else {
            i = 0
            document.querySelector('.cambioColor').style.color = "white"
        }
    }

    setInterval(cambioImagen, 6000)

})




