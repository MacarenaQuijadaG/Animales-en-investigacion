 import Animal from './animal.js';
// CLASE HIJO
class Leon extends Animal {
    constructor() {
        super()
    }
}

console.log({ Leon })

class Lobo extends Animal{
    constructor(){
        super()
    }
}
console.log({Lobo})

class Aguila extends Animal{
    constructor(){
        super()
    }
}
console.log({Aguila})

class Serpiente extends Animal{
    constructor(){
        super()
    }
}
console.log({Serpiente})

class Oso extends Animal{
    constructor(){
        super()
    }
}
console.log({Oso})

//FUNCION IIFE
const animales = (() => {
    const url = 'assets/js/animales.json'; 
    const getData = async () => {
        const res = await fetch(url);
        const datos = await res.json();
        console.log(datos)
        return datos;
    };
    return { getData };
})();

const datos = await animales.getData()
//IMPRIME
console.log(await animales.getData())
console.log(animales.getData)
console.log(datos)

const selectAnimal = document.getElementById('animal');
const selectEdad = document.getElementById('edad');
const comentario = document.getElementById('comentarios');
const contenedorImagen = document.getElementById('preview'); 
const btnRegistrar = document.getElementById('btnRegistrar');
//TABLA PA LLENAR
const tabla = document.getElementById('Animales'); 
const audio = document.getElementById('player');
console.log(audio)

selectAnimal.addEventListener('change', () => {
    // IMPRIME VALOR POR CONSOLA
    console.log(selectAnimal.value) 
    console.log(datos)
    //BUSCARE EL ANIMAL
    const animalEncontrado = datos.animales.find(animal => animal.name === selectAnimal.value);
    console.log(animalEncontrado);
    const image = `<img src="assets/imgs/${animalEncontrado.imagen}" width="200px" >`
    contenedorImagen.innerHTML= image;

    // AL ACCIONAR EL BOTON REGISTRAR SE MUESTRA UN REPRODUCTOR CON EL SONIDO
    btnRegistrar.addEventListener('click', () => {
        console.log(animalEncontrado.sonido);
    
        tabla.innerHTML = `${image}<audio src="assets/sounds/${animalEncontrado.sonido}" controls></audio>`;
    });


    console.log(typeof (selectAnimal.value)) /
    instanciarAnimal(selectAnimal.value)
});

selectEdad.addEventListener('change', () => {
    console.log(selectEdad.value);  
});

comentario.addEventListener('input', () => {
    console.log(comentario.value); 
});

//FUNCION INSTANCIAR ANIMAL
function instanciarAnimal(valorSelect) {
    let animal = new Animal(valorSelect);
    console.log('animal:', animal)
}


