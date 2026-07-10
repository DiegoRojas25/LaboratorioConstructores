const prompt = require('prompt-sync')()

function Vehiculo(marca, linea, clase, color, placa){
    this.marca= marca;
    this.linea= linea;
    this.clase=clase;
    this.color=color;
    this.placa=placa;
    this.disponible=true;

    this.vender = function(){
        console.log(`¡Auto vendido! Felicitaciones.`);
        return this.disponible = false;
    }

    this.estado = function(){
        if(this.disponible){
            console.log(`El vehiculo ${this.marca} ${this.linea} de placa ${this.placa} se encuentra disponible para vender!`)
        }
        else{
            console.log(`El vehiculo ${this.marca} ${this.linea} de placa ${this.placa} se vendió.`)
        }
    }

    this.modificarColor = function(){
        return this.color = prompt(`Por favor ingrese el nuevo color: `)
    }

    this.mostrar = function(){
        console.log(`\n Vehiculo: \nMarca: ${this.marca}\nclase: ${this.clase}\nColor: ${this.color}\nPlaca: ${this.placa}\n`);
    }
}

console.log(`\nRegistro de vehículo.\nPor favor ingrese la siguiente información: \n`);
const vehiculo1 = new Vehiculo(prompt(`Marca: `), prompt(`Linea: `), prompt(`Clase: `), prompt(`Color: `), prompt(`Placa: `));
const vehiculo2 = new Vehiculo(prompt(`Marca: `), prompt(`Linea: `), prompt(`Clase: `), prompt(`Color: `), prompt(`Placa: `));
const vehiculo3 = new Vehiculo(prompt(`Marca: `), prompt(`Linea: `), prompt(`Clase: `), prompt(`Color: `), prompt(`Placa: `));




//Mostrar los vehiculos existentes:
vehiculo1.mostrar();
vehiculo2.mostrar();
vehiculo3.mostrar();

//Acción de vender el vehículo:
vehiculo1.estado();
vehiculo1.vender();
vehiculo1.estado();


//Cambio de color:
vehiculo2.mostrar();
vehiculo2.modificarColor();
vehiculo2.mostrar();



