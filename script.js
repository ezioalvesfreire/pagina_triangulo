function carregar() {

    var triangulo = "Não forma um triângulo! "
    var a = window.document.getElementById("txtlado-A").value
    var b = window.document.getElementById("txtlado-B").value
    var c = window.document.getElementById("txtlado-C").value
    var res = document.querySelector("div#res")



    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    if (a <= 0 || b <= 0 || c <= 0) {

        img.src = "triangulos/no-triangle.jpg"

    } else if (a != b && b != c) {
        img.src = "triangulos/escaleno.jpeg"
        var triangulo = "ESCALENO: Os três lados são diferentes"

    } else if ((a == b && b != c) || (a == c && c != b) || (c == b && c != a)) {
        img.src = "triangulos/isosceles.jpg"
        var triangulo = "ISÓCELES: Os dois lados são iguais"

    } else if (a == b && b == c) {

        img.src = "triangulos/equilatero.jpg"
        var triangulo = "EQUILÁTERO: Os três lados são iguais"


    }

    document.getElementById('res').innerHTML = triangulo

}



function verificar() {
    var a = window.document.getElementById("txtlado-A")
    var b = window.document.getElementById("txtlado-b")
    var c = window.document.getElementById("txtlado-c")
    var res = document.querySelector("div#msg")



}