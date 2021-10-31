// declaración de datos iniciales
let undefined;
const sequence = [10, 4, 8, 27.4, 500, null, undefined, 100, 25, 40, 31, 20, 17, 1890, 13, 42];
const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

//Funcion para limpiar el array y dejar unicamente los numeros
function clearArray (arr){
    let newArr=[];
    for (let i in arr){
        if(typeof (arr[i])==='number'){
            newArr.push(arr[i]);
        }
    } 
    return newArr;
}
//Funcion que calcula le media aritmetica del array
function averageArry(array){
    let arr= clearArray(array)
    let result=0;
    for(let i in arr){
        result += arr[i]
    }
    return result/arr.length;
}
//Funcion separa letra de los numeros del DNI
function deleteFinalChar(str){
    return str.slice(0,-1)
}
function getFinalChar(str){
    return str.slice(-1)
}
//Funcion que comprueba si la letra del DNI es correcta
function calculateDNI(dni){
    let dniNumber = deleteFinalChar(dni)
    let charDNI = getFinalChar(dni).toUpperCase()
    if(dniNumber<0 || dniNumber>99999999) return "El dni introducido no es correcto"
    else {
        if (letrasDNI[dniNumber%23] === charDNI){
            return `La letra del DNI ${dni} es correcta`
        }
        else return `La letra del DNI no es correcta, deberia ser ${letrasDNI[dniNumber%23]}`
      
    }
}
//Funcion para ordenar de menor a mayor el array

console.log(calculateDNI('30245712e'))