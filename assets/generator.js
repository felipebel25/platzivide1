let kabron ={
    name: "imbcil",
}


function* generate()
{
    console.log("Start")
    yield 1;
    yield 2;
    console.log("End")

}

const gen = generate()
console.log(gen.next())
console.log(gen.next())



function* idmaker()
{
    let id = 1;
    while (true){
        yield id
        id = id+ 1;
    }
}

const id = idmaker();
console.log(id.next())


function* vago()
{
    let a = 1;
    let b = 1;
    while (true)
    {
        const nextNumber = a  + b;
        a = b;
        b =  nextNumber;
        yield nextNumber;
    }
}

const vaga = vago();
vaga.next()
vaga.next()
vaga.next()
vaga.next()
vaga.next()
vaga.next()
