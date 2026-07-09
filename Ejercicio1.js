function Computador(marca, procesador, ram, precio){
    this.marca = marca;
    this.procesador = procesador;
    this.ram = ram;
    this.precio = precio;
}

const computadora1 = new Computador("hp","Intel i3",16,1000);
const computadora2 = new Computador("Acer","Intel i9",24,2500);
const computadora3 = new Computador("Asus","Rayzen 7",24, 3000);

console.log(computadora1);
console.log(computadora2);
console.log(computadora3);