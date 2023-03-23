let message;
let tvStation = 18;

switch (tvStation) {
    case 1:
        message = "Tf1";
        break;
    case 2:
        message = "France 2"
        break;
    case 3:
        message = "France 3";
        break;
    case 4:
        message = "Canal +";
        break;
    case 5:
         message = "France 5";
         break;
    case 6:
        message = "M6";
        break;
    case 7:
        message = "Arte";
        break;
    default:
        message = "chaine inconue";
    
}
console.log(message);