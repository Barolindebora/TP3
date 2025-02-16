import fs from'fs'; 

//clase para representar un superheroe 

class Superheroe{
    constructor (id, nombreSuperheroe, nombreReal, nombreSociedad, edad, planetaOrigen, debilidad, poder, habilidadEspecial, aliado, enemigo){
        this.id = id; 
        this.nombreSuperheroe=nombreSuperheroe; 
        this.nombreSociedad=nombreSociedad;
        this.edad = edad;
        this.planetaOrigen = planetaOrigen;
        this.debilidad = debilidad;
        this.poder = poder;
        this.habilidadEspecial = habilidadEspecial;
        this.aliado = aliado;
        this.enemigo = enemigo;

    }
}
//Funcion para leer y ordenar los superheroes

export function leerSuperheroes (ruta){
    const datos =fs.readFileSync (ruta, 'utf-8'); 
    const superheroesArray=JSON.parse (datos); 


//Convertir a instancias de Superheroe
const superheroes = superheroesArray.map(hero=>new Superheroe (hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad,
     hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo)
); 
 
// ordenar por nombre de superheroe 
superheroes.sort ((a, b)=>a.nombreSuperheroe.localeCompare(b.nombreSuperheroe))
return superheroes; 
}