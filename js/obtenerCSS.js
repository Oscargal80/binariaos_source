function obtenerCSS() 
{ 
fechadehoy = new Date(); 
tiempoactual=fechadehoy.getTime(); 
fechadehoy.setTime(tiempoactual); 
horaactual = fechadehoy.getHours(); 
 
if (horaactual > 19) 
colores = "./css/style-color3.css"; 
else if (horaactual > 12) 
colores  = "./css/main.css"; 
else if (horaactual > 4) 
colores  = "./css/main.css"; 
else if (horaactual > 1) 
colores  = "./css/style-color3.css"; 
else 
colores  = "./css/main.css"; 
 
var css = '<';  css+='link rel="stylesheet" href="' + colores  + '" \/';  css+='>'; 
 
document.write(css);