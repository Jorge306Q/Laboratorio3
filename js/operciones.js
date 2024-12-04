//javascript

function realizarOperaciones(){
let num1 = Number(document.getElementById('num1').value);
let num2 = Number(document.getElementById('num2').value);
let operacion = document.getElementById('Operaciones').value;

switch(operacion){
    case "Suma":
        alert("La suma de los 2 numero es: " + (num1+num2));
     break;
    case "Resta":
        alert("La resta de los 2 numeros es: " + (num1-num2));
    break;
    case "Multiplica":
        alert("La multiplicacion de los 2 numero es: " + (num1*num2));
     break;
     case "Division":
            if(num2 ===0){
                alert("No esta permitido la division entre cero");
              }else{
                alert("la division de los 2 numeros es: "  + (num1/num2));
            }
      break
            }

        }
        
