//window.prompt('sdgdsrgrgs');

var pasos = 21;
var procesos = 5;
var cas = 20;


// Para este punto ya se debe tener el numero total de pasos dados, el resto del calculo se realizara al vuelo.
// Para cada paso se usara una casilla de 10 pixeles.
// el canvas tendra un alto de 10 por cada proceso + 10 para la interfaz. 60 porque 5 es constante.
// el ancho sera de 10 por cada paso + 10 para la interfaz.
//+10 de ancho y alto tambien

var ancho = cas*pasos+cas*2;
var alto = procesos*cas+cas*2;

var c = document.getElementById("lienzo");
c.width=ancho.toString();
c.height=alto.toString();


var ctx = c.getContext("2d");

// dibuja lineas y numeros

var i = 1;
var j = 1;

ctx.lineWidth = 1;
while (i<=pasos) {
	j = 1;
	while (j<=procesos) {
		ctx.rect(i*cas, j*cas, cas, cas);
		j=j+1;
	}
	i=i+1;
}

//texto y
ctx.font = "15px Arial";
ctx.fillText("1", 2, cas+cas-2); 
ctx.fillText("2", 2, cas*2+cas-2); 
ctx.fillText("3", 2, cas*3+cas-2); 
ctx.fillText("4", 2, cas*4+cas-2); 
ctx.fillText("5", 2, cas*5+cas-2); 
//texto x
ctx.font = "12px Arial";

var t = 1;
while (t<=pasos) {
	ctx.fillText(t.toString(), cas*t, cas*2+cas*procesos-5); 	
	t=t+1;
}


//dibujar todo
ctx.stroke(); 







/////////////

