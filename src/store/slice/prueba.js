function esPrimo(numero) {
	if (numero <= 1) return false;
	for (let i = 2; i <= Math.sqrt(numero); i++) {
		if (numero % i === 0) {
			return false;
		}
	}
	return true;
}
let conta=0;
function sumaNumerosPrimos(n) {
  let num=[];
  let suma=0
    for(let i=1; i<n;i++){
       num[conta]=i;
       conta++
    }
     for(let j=0; j<num.length;j++){
        console.log(num[j])
        if(esPrimo(num[j])){
          suma+=num[j]
          console.log(suma)
        }
     }

return suma

}

const valor = sumaNumerosPrimos(11)
console.log(valor)


const valor1 ="Hola mundo";
let st=[]
console.log(valor1.length)

for(let i=0; i < valor1.length ; i++){
   
    st[i]=valor1[i]
    


}
console.log(st.reverse().join(''))
console.log(valor1)

const Argumentos={

      listas:[ [ "a", "b", "c" ], [ "d", "e" ], [ "f", "g", "h", "i", "j" ] ] 
    
    }
let contar=0;
let ar=[];
    console.log(Argumentos.listas.length)
    for(let i=0; i< Argumentos.listas.length;i++){
         ar[contar]=Argumentos.listas[i].length;

         contar++
    }
    console.log(Math.max(...ar))

    
const listado = (lista) =>{
    return lista.sort(function (a, b) {
        if(a.edad > b.edad){
         return 1
        }
        if(a.edad < b.edad){
         return -1
        }
       })
}
const lista = [ { nombre: "Ana", edad: 25 }, { nombre: "Juan", edad: 30 }, { nombre: "Maria", edad: 20 }, ];
console.log(listado(lista))