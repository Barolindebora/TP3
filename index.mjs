import { leerSuperheroes, agregarSuperheroes} from "./utils.mjs";
const archivoOriginal='./superheroes.txt'; 
const archivosNuevos='./agregarSuperheroes.txt';

//agregar nuevos superheroes 

agregarSuperheroes(archivoOriginal, archivosNuevos); 

//leer y mostrar la lista de superheroes ordenada
const superheroes=leerSuperheroes(archivoOriginal)
console.log('Superheroes ordenados: '); 
console.log (superheroes);


