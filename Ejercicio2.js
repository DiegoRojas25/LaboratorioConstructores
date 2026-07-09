function Mascota(nombre, especie, edad, peso){
    this.nombre = nombre;
    this.especie = especie;
    this.edad  = edad;
    this.peso = peso;

    this.presentarse = function(){
        return `La mascota ${this.nombre} es de la especie ${this.especie}, tiene ${this.edad} año(s) y pesa ${this.peso} kg. `
    };
}

const mascota1 = new Mascota("Mateo", "perro", 4, 40);
const mascota2 = new Mascota("Miel", "gato",2, 25 );
const mascota3 = new Mascota("Leo", "conejo", 1, 15);
const mascota4 = new Mascota("Cacao", "Guacamayo", 1, 2)

console.log("\n"+mascota1.presentarse());
console.log(mascota2.presentarse());
console.log(mascota3.presentarse());
console.log(mascota4.presentarse()+"\n");