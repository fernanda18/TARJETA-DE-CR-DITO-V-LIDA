var value;
var arrayAscii =[];
var arrayInt =[];
var valueAscii;
var sumTotal = 0;

function isValidCard (value){
  auxStr="";
  do{
    do{
      value = prompt("Ingresa tu numero de tarjeta");
      if(value.length != 16 || value === ""){
        alert("Por favor ingresa 16 digitos");
      } else {
        for(var i = 0; i < value.length; i++){
          var auxAscii = value.charCodeAt(i);
          
        }
      }
    }
  }
}
