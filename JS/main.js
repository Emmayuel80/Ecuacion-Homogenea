// JavaScript source code
var a, b, c;
function getData() {
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;
    a = Number(a);
    b = Number(b);
    c = Number(c);
    procedimiento();
    cambiarTab();
    
}
function cambiarTab() {
    document.getElementById("tab1").className = "mdl-layout__tab";
    document.getElementById("fixed-tab-1").className = "mdl-layout__tab-panel";
    document.getElementById("tab2").className = "mdl-layout__tab is-active";
    document.getElementById("fixed-tab-2").className = "mdl-layout__tab-panel is-active";
}
function procedimiento() {
    calcEcuacionGeneral(a, b, c);
    calcEc_Homo();
    calcLi();
    calcEc_Carac();
    getRaices();
}
function calcEc_Homo() {
        document.getElementById("ec_homo").innerHTML = a+"y''+("+ b + "y')+(" + c + "y)=0";
  
}

function calcEc_Carac() {
    document.getElementById("ec_carac").innerHTML = a + "m^2+(" + b + "m)+(" + c + ")=0";
}

function getRaices() {
    document.getElementById("raices").innerHTML = "Las raices son: m1=" + x1 + ", m2=" + x2;
}


function calcLi() {
    if (numero.imaginario == 0 && b == 0 && c > 0) {
        document.getElementById("yc").innerHTML = "yc= C1 " + " cos " + x1 + "x +" + "C2 " + " sen " + x2 + "x";
    }
    else if (numero.imaginario == 0 && b == 0 && c < 0) {
        document.getElementById("yc").innerHTML = "yc= C1 e^" + x1 + "x +" + "C2 e^" + x2 + "x";
    }
    else if (numero.imaginario == 0 && c == 0) {
        document.getElementById("yc").innerHTML = "yc= C1 " + "+" + " C2 e^" + x2 + "x";
    }
    else if (numero.imaginario == 0) {
        if (x1 == x2) {
            document.getElementById("yc").innerHTML = "yc= C1 e^" + x1 + "x +" + "C2 xe^" + x2 + "x";
        }
        else if (x1 != x2) {
            document.getElementById("yc").innerHTML = "yc= C1 e^" + x1 + "x +" + "C2 e^" + x2 + "x";
        }
    }

    else {
        if (numero.real != 0) {
            document.getElementById("yc").innerHTML = "yc= C1 e^" + numero.real + "x cos " + numero.imaginario + "x +" + "C2 e^" + numero2.real + "x sen " + numero2.imaginario + "x";
        }
        else {
            document.getElementById("yc").innerHTML = "yc= C1 "+ " cos " + numero.imaginario + "x +" + "C2 " + " sen " + numero2.imaginario + "x";
        }
    }

}

