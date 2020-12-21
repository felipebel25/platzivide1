function saludar()
{
    console.log(`Hola soy ${this.name} ${this.apellido}`)
}
function correr(metros,direccion)
{
    console.log(`${this.name} corrio ${metros} metros en direccion de ${direccion}`)
}

const felipe=
{
    name: 'Felipe',
    apellido: 'Medina',
}

saludar.call(felipe);

//output Hola soy Felipe Medina

const felipemetros = [400,'sur']


correr.apply(felipe,felipemetros)


const narutocorre = correr.bind(felipe, 3000)

narutocorre('aldea del sonido');


//output 
/*
Hola soy Felipe Medina
Felipe corrio 400 metros en direccion de sur
Felipe corrio 3000 metros en direccion de aldea del sonido
*/