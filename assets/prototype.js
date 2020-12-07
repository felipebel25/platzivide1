
// function Heroes(nombre)
// {
//     const heroe= Object.create(Heroes.prototype);
//     heroe.nombre = nombre;
//     return heroe
// }
// Heroes.prototype.saludar= function()
// {
//     console.log("Hola soy "+ this.nombre)
// }

// const zelda = Heroes('zelda')
// zelda.saludar();
// const link = Heroes('link')
// link.saludar();
function Heroes(nombre)
{

    this.nombre = nombre;
   
}
Heroes.prototype.saludar= function()
{
    console.log("Hola soy "+ this.nombre)
}

const zelda =new Heroes('zelda')
zelda.saludar();
const link =new Heroes('link')
link.saludar();