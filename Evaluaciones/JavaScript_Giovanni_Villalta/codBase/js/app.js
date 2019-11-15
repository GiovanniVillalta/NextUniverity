var Calculadora = {

preValorPantalla: document.getElementById('display'),
valorPantalla: "0",
valorUno: 0,
valorDos: 0,
operacion:"",
teclaPrevia : "",


Cero: document.getElementById('0'),
Uno: document.getElementById('1'),
Dos: document.getElementById('2'),
Tres: document.getElementById('3'),
Cuatro: document.getElementById('4'),
Cinco: document.getElementById('5'),
Seis: document.getElementById('6'),
Siete: document.getElementById('7'),
Ocho: document.getElementById('8'),
Nueve: document.getElementById('9'),
Punto: document.getElementById('punto'),
Igual: document.getElementById('igual'),
Mas: document.getElementById('mas'),
Menos: document.getElementById('menos'),
Division: document.getElementById('dividido'),
Multiplicacion: document.getElementById('por'),
On: document.getElementById('on'),
Signo: document.getElementById('sign'),



reducirTamañoTecla: function(tecla){
tecla.style.width = "21%";
tecla.style.height = "61px";
},

reducirTamañoTeclaCol1: function(tecla){
  tecla.style.width = "27%";
  tecla.style.height = "61px";
},

reducirTamañoTeclaCol2: function(tecla){
  tecla.style.width = "87%";
  tecla.style.height = "97%";
},

restaurarTamañoTecla: function(tecla){
tecla.style.width = "22%";
tecla.style.height = "62.91px";
},

restaurarTamañoTeclaCol1: function(tecla){
tecla.style.width = "29%";
tecla.style.height = "62.91px";
},

restaurarTamañoTeclaCol2: function(tecla){
  tecla.style.width = "90%";
  tecla.style.height = "100%";
},

mostrarValorPantallaTeclaNumerica: function(tecla){

  if (Calculadora.teclaPrevia == "Igual") {
    document.getElementById('display').textContent = "0";
    Calculadora.teclaPrevia="";
  }

  Calculadora.preValorPantalla = document.getElementById('display');
  var cadena = Calculadora.preValorPantalla.textContent;

  if (cadena.indexOf(".")!= -1) {
    var max_longitud = 9;
  } else {
    var max_longitud = 8;
  }

  var longitud = Calculadora.preValorPantalla.textContent.length;

  if (longitud < max_longitud) {

    if (Calculadora.preValorPantalla.textContent == "0") {
      Calculadora.valorPantalla = tecla;
    } else {
      Calculadora.valorPantalla = Calculadora.preValorPantalla.textContent + tecla;
    }

    document.getElementById('display').textContent = Calculadora.valorPantalla;
  }

},

mostrarValorPantallaTeclaPunto: function(tecla){
  Calculadora.preValorPantalla = document.getElementById('display');
  var cadena = Calculadora.preValorPantalla.textContent;

  if (cadena.indexOf(".") == -1) {
    Calculadora.valorPantalla = Calculadora.preValorPantalla.textContent + tecla;
    document.getElementById('display').textContent = Calculadora.valorPantalla;
  }
},

mostrarValorPantallaTeclaSigno: function(tecla){
  Calculadora.preValorPantalla = document.getElementById('display');
  var cadena = Calculadora.preValorPantalla.textContent;
  var longitud = Calculadora.preValorPantalla.textContent.length;

  if (cadena.indexOf("-")== -1) {
    if (cadena != "0") {
      Calculadora.valorPantalla = "-" + Calculadora.preValorPantalla.textContent ;
      document.getElementById('display').textContent = Calculadora.valorPantalla;
    }
  } else {
          cadena = cadena.substring(1, longitud);
          document.getElementById('display').textContent = cadena;
  }

},

mostrarValorPantallaResultado: function(resultado){
  var cadena = resultado;
  var max_longitud = 8;
  var longitud = cadena.length;

  if (longitud < max_longitud) {
   document.getElementById('display').textContent = resultado;
  } else {

    cadena = cadena.substring(0, max_longitud);
    document.getElementById('display').textContent = cadena;

  }

},

limpiar: function(){
  document.getElementById('display').textContent = "0";
  Calculadora.valorUno= 0;
  Calculadora.valorDos= 0;
  Calculadora.operacion="";
  Calculadora.teclaPrevia="";
},

Sumar: function(){
    var Suma = parseFloat(this.valorUno) + parseFloat(this.valorDos);
    return Suma.toFixed(2);
},

Restar: function(){
    var Resta = parseFloat(this.valorUno) - parseFloat(this.valorDos);
    return Resta.toFixed(2);
},

Dividir: function(){
  var Division = 0;

  if (parseFloat(this.valorDos) != 0){
    Division = parseFloat(this.valorUno) / parseFloat(this.valorDos);

  }else {
    Division = 0;
  }

    return Division.toFixed(2);
},

Multiplicar: function(){
    var Multiplo = parseFloat(this.valorUno) * parseFloat(this.valorDos);
    return Multiplo.toFixed(2);
},

 init: function(){


   Calculadora.Mas.addEventListener("mouseup",function(){
     Calculadora.restaurarTamañoTeclaCol2(Calculadora.Mas);
   })

   Calculadora.On.addEventListener("mouseup",function(){
     Calculadora.restaurarTamañoTecla(Calculadora.On);
   })
   Calculadora.Signo.addEventListener("mouseup",function(){
     Calculadora.restaurarTamañoTecla(Calculadora.Signo);
   })
   Calculadora.Division.addEventListener("mouseup",function(){
     Calculadora.restaurarTamañoTecla(Calculadora.Division);
   })
   Calculadora.Multiplicacion.addEventListener("mouseup",function(){
     Calculadora.restaurarTamañoTecla(Calculadora.Multiplicacion);
   })
   Calculadora.Menos.addEventListener("mouseup",function(){
     Calculadora.restaurarTamañoTecla(Calculadora.Menos);
   })
   Calculadora.Igual.addEventListener("mouseup",function(){
     Calculadora.restaurarTamañoTeclaCol1(Calculadora.Igual);
   })
   Calculadora.Punto.addEventListener("mouseup",function(){
     Calculadora.restaurarTamañoTeclaCol1(Calculadora.Punto);
   })
   Calculadora.Cero.addEventListener("mouseup",function(){
     Calculadora.restaurarTamañoTeclaCol1(Calculadora.Cero);
   })
   Calculadora.Uno.addEventListener("mouseup",function(){
     Calculadora.restaurarTamañoTeclaCol1(Calculadora.Uno);
   })
   Calculadora.Dos.addEventListener("mouseup",function(){
     Calculadora.restaurarTamañoTeclaCol1(Calculadora.Dos);
   })
   Calculadora.Tres.addEventListener("mouseup",function(){
     Calculadora.restaurarTamañoTeclaCol1(Calculadora.Tres);
   })
   Calculadora.Cuatro.addEventListener("mouseup",function(){
     Calculadora.restaurarTamañoTecla(Calculadora.Cuatro);
   })
   Calculadora.Cinco.addEventListener("mouseup",function(){
     Calculadora.restaurarTamañoTecla(Calculadora.Cinco);
   })
   Calculadora.Seis.addEventListener("mouseup",function(){
     Calculadora.restaurarTamañoTecla(Calculadora.Seis);
   })
   Calculadora.Siete.addEventListener("mouseup",function(){
     Calculadora.restaurarTamañoTecla(Calculadora.Siete);
   })
   Calculadora.Ocho.addEventListener("mouseup",function(){
     Calculadora.restaurarTamañoTecla(Calculadora.Ocho);
   })
   Calculadora.Nueve.addEventListener("mouseup",function(){
     Calculadora.restaurarTamañoTecla(Calculadora.Nueve);
   })

   Calculadora.Siete.addEventListener("mousedown",function(){
     Calculadora.reducirTamañoTecla(Calculadora.Siete);
     Calculadora.mostrarValorPantallaTeclaNumerica("7")
   })
   Calculadora.Ocho.addEventListener("mousedown",function(event){
     Calculadora.reducirTamañoTecla(Calculadora.Ocho);
     Calculadora.mostrarValorPantallaTeclaNumerica("8")
   })

   Calculadora.Nueve.addEventListener("mousedown",function(event){
     Calculadora.reducirTamañoTecla(Calculadora.Nueve);
     Calculadora.mostrarValorPantallaTeclaNumerica("9")
   })

   Calculadora.Seis.addEventListener("mousedown",function(event){
     Calculadora.reducirTamañoTecla(Calculadora.Seis);
     Calculadora.mostrarValorPantallaTeclaNumerica("6")
   })

   Calculadora.Cinco.addEventListener("mousedown",function(event){
     Calculadora.reducirTamañoTecla(Calculadora.Cinco);
     Calculadora.mostrarValorPantallaTeclaNumerica("5")
   })

   Calculadora.Cuatro.addEventListener("mousedown",function(event){
     Calculadora.reducirTamañoTecla(Calculadora.Cuatro);
     Calculadora.mostrarValorPantallaTeclaNumerica("4")
   })

   Calculadora.Tres.addEventListener("mousedown",function(event){
     Calculadora.reducirTamañoTeclaCol1(Calculadora.Tres);
     Calculadora.mostrarValorPantallaTeclaNumerica("3")
   })

   Calculadora.Dos.addEventListener("mousedown",function(event){
     Calculadora.reducirTamañoTeclaCol1(Calculadora.Dos);
     Calculadora.mostrarValorPantallaTeclaNumerica("2")
   })

   Calculadora.Uno.addEventListener("mousedown",function(event){
     Calculadora.reducirTamañoTeclaCol1(Calculadora.Uno);
     Calculadora.mostrarValorPantallaTeclaNumerica("1")
   })

   Calculadora.Cero.addEventListener("mousedown",function(event){
     Calculadora.reducirTamañoTeclaCol1(Calculadora.Cero);
     Calculadora.mostrarValorPantallaTeclaNumerica("0")
   })

   Calculadora.Punto.addEventListener("mousedown",function(event){
     Calculadora.reducirTamañoTeclaCol1(Calculadora.Punto);
   Calculadora.mostrarValorPantallaTeclaPunto(".")

   })

   Calculadora.Igual.addEventListener("mousedown",function(event){

     Calculadora.reducirTamañoTeclaCol1(Calculadora.Igual);

     if (Calculadora.teclaPrevia == "Igual"){
       Calculadora.valorUno= resultado;
     } else {

     Calculadora.valorDos = document.getElementById('display').textContent;
     resultado = 0;

     }

     if (Calculadora.operacion == "Suma"){
       resultado=Calculadora.Sumar();
     }

     if (Calculadora.operacion == "Resta"){
       resultado=Calculadora.Restar();
     }

     if (Calculadora.operacion == "Division"){
       resultado=Calculadora.Dividir();
     }

     if (Calculadora.operacion == "Multiplicacion"){
       resultado=Calculadora.Multiplicar();
     }
     Calculadora.teclaPrevia="Igual";
     Calculadora.mostrarValorPantallaResultado(resultado);



   })


   Calculadora.Mas.addEventListener("mousedown",function(event){
     Calculadora.reducirTamañoTeclaCol2(Calculadora.Mas);
     Calculadora.valorUno = document.getElementById('display').textContent;
     Calculadora.operacion = "Suma"
     document.getElementById('display').textContent="0";
   })

   Calculadora.Menos.addEventListener("mousedown",function(event){
     Calculadora.reducirTamañoTecla(Calculadora.Menos);
     Calculadora.valorUno = document.getElementById('display').textContent;
     Calculadora.operacion = "Resta"
     document.getElementById('display').textContent="0";
   })

   Calculadora.Division.addEventListener("mousedown",function(event){
     Calculadora.reducirTamañoTecla(Calculadora.Division);
     Calculadora.valorUno = document.getElementById('display').textContent;
     Calculadora.operacion = "Division"
     document.getElementById('display').textContent="0";

   })

   Calculadora.Multiplicacion.addEventListener("mousedown",function(event){
     Calculadora.reducirTamañoTecla(Calculadora.Multiplicacion);
     Calculadora.valorUno = document.getElementById('display').textContent;
     Calculadora.operacion = "Multiplicacion"
     document.getElementById('display').textContent="0";

   })

   Calculadora.On.addEventListener("mousedown",function(event){
     Calculadora.reducirTamañoTecla(Calculadora.On);
     Calculadora.limpiar();
   })

   Calculadora.Signo.addEventListener("mousedown",function(event){
     Calculadora.reducirTamañoTecla(Calculadora.Signo);
     Calculadora.mostrarValorPantallaTeclaSigno("-");
   })




}

}


Calculadora.init();
