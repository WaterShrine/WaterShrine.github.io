document.getElementById("index_experiencia").onmouseout = function() {
  colorear("index_experiencia","blue")
}//out experiencia
document.getElementById("index_experiencia").onmouseover = function(){ 
  colorear("index_experiencia","white");
}//over experiencia

document.getElementById("index_educacion").onmouseout = function() {
    colorear("index_educacion","blue")
}//out educacion
document.getElementById("index_educacion").onmouseover = function(){ 
    colorear("index_educacion","white");
}//over educacion

document.getElementById("index_habilidades").onmouseout = function() {
  colorear("index_habilidades","blue")
}//out habilidades
document.getElementById("index_habilidades").onmouseover = function(){ 
  colorear("index_habilidades","white");
}//over habilidades

document.getElementById("index_contacto").onmouseout = function() {
  colorear("index_contacto","blue")
}//out contacto
document.getElementById("index_contacto").onmouseover = function(){ 
  colorear("index_contacto","white");
}//over contacto




function colorear(elemento,colorsito){
  document.getElementById(elemento).style.color = colorsito;
  //console.log("testing")
}



function cambiaExp(elemento)
{
  if(elemento.value=="golfista"){
    //console.log("hola soy golfista")
    document.getElementById("exp_golfista").style.display = "block"
    document.getElementById("exp_zapatero").style.display = "none"
    document.getElementById("exp_cirujano").style.display = "none"
    document.getElementById("exp_vaquero").style.display = "none"
    document.getElementById("exp_gamer").style.display = "none"
  }
  else if(elemento.value=="zapatero"){
    //console.log("hola soy zapatero")
    document.getElementById("exp_zapatero").style.display = "block"
    document.getElementById("exp_golfista").style.display = "none"    
    document.getElementById("exp_cirujano").style.display = "none"
    document.getElementById("exp_vaquero").style.display = "none"
    document.getElementById("exp_gamer").style.display = "none"
  }
  else if(elemento.value=="cirujano"){
    //console.log("hola soy Cirujano")
    document.getElementById("exp_cirujano").style.display = "block"
    document.getElementById("exp_golfista").style.display = "none"
    document.getElementById("exp_zapatero").style.display = "none"    
    document.getElementById("exp_vaquero").style.display = "none"
    document.getElementById("exp_gamer").style.display = "none"
  }
  else if(elemento.value=="vaquero"){
    //console.log("hola soy vaquero")
    document.getElementById("exp_vaquero").style.display = "block"
    document.getElementById("exp_golfista").style.display = "none"
    document.getElementById("exp_zapatero").style.display = "none"
    document.getElementById("exp_cirujano").style.display = "none"    
    document.getElementById("exp_gamer").style.display = "none"
  }
  else if(elemento.value=="gamer"){
    //console.log("hola soy gamer")
    document.getElementById("exp_gamer").style.display = "block"
    document.getElementById("exp_golfista").style.display = "none"
    document.getElementById("exp_zapatero").style.display = "none"
    document.getElementById("exp_cirujano").style.display = "none"
    document.getElementById("exp_vaquero").style.display = "none"    
  }
  else if(elemento.value=="seleccione"){
    //console.log("seleccione una experiencia")
    document.getElementById("exp_gamer").style.display = "none"
    document.getElementById("exp_golfista").style.display = "none"
    document.getElementById("exp_zapatero").style.display = "none"
    document.getElementById("exp_cirujano").style.display = "none"
    document.getElementById("exp_vaquero").style.display = "none"    
  }
  
}
