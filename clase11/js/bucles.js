/*
-while -> cuando no tengamos un número de repeticiones concretas
-do-while -> cuando no tengamos un número de repeticones concretas
-for -> Utilizar cuando tenemso un  número de repeticiones concretas o un rango
*/

/* 1-10 */

for (let i=1; i<=10;i++) {
    console.log(i)
}



let i = 1;
while(i<=10){
    console.log(i);
    i++;
}

let j = 1;

do{
    console.log(j);
    j++
}while(j<=10);


//Bucles con DOM

let cajas = document.querySelectorAll(".cajas");
console.log("cajas", cajas);

 for(let i = 0; i<cajas.length; i++){
    cajas[i].style.width = "50px";
    cajas[i].style.height = "50px";
    cajas[i].style.background = "blue";
    cajas[i].style.marginTop = "5px";
    cajas[i].style.marginRight = "5px";
    cajas[i].style.display = "inline-block";
}