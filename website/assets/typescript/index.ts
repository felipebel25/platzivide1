enum Color {
    rojo = "rojo",
    verde = 'verde',
    azul = 'azul'
}

interface Rectangulo {
     ancho:number,
     alto:number,
     Color?:string, 
}

let rect: Rectangulo ={
    ancho: 4,
    alto: 6,
    Color: Color.verde,
}
//
function area(r:Rectangulo){
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);


rect.toString = function()
{


    return (this.Color)?`Un rectangulo ${rect.alto} de alto y ${rect.ancho} de ancho de color ${this.Color} `: `Un rectangulo ${rect.alto} de alto y ${rect.ancho} de ancho no tiene color`


}

console.log(rect.toString())