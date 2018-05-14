// JavaScript source code
var numero = new Object();
var numero2 = new Object();
numero.real = 0;
numero.imaginario = 0;


function calcEcuacionGeneral(a,b,c) {
    var discri;
    if (b == 0) {
        if (c < 0) {
            c = c * -1;
        }
        if (Math.sqrt(c) % 1 != 0) {
            x1 = "√" + c;
            x2 = "√" + c;
        }
        else {
            x1 = Math.sqrt(c);
            x2 = Math.sqrt(c);
        }
    }
    else if (c == 0) {
        x1 = 0;
        x2 = b * -1;
    }
    else {
        discri = b * b - 4 * a * c;

        if (discri < 0) {
            discri = discri * -1;


            if (Math.sqrt(discri) % 1 != 0) {
                numero.imaginario = "√" + (Math.sqrt(discri)).toFixed(0) + "/" + (2 * a);
                numero2.imaginario = "√" + (Math.sqrt(discri)).toFixed(0) + "/" + (2 * a);
            }
            else {
                numero.imaginario = Math.sqrt(discri) / (2 * a);
                numero2.imaginario = Math.sqrt(discri) / (2 * a);
            }
            numero.real = (-b / (2 * a));
            numero2.real = (-b / (2 * a));
            x1 = numero.real + "+" + numero.imaginario+"i";

            x2 = numero2.real +"+" + numero2.imaginario+"i";



        }

        else if (discri == 0) {

            x1 = -b / (2 * a);
            x2 = x1;


        }

        else if (discri > 0) {

            x1 = (-b + Math.sqrt(discri)) / (2 * a);

            x2 = (-b - Math.sqrt(discri)) / (2 * a);


        }
    }
}