function Estudiante(nombre, curso, nota){
    this.nombre = nombre;
    this.curso = curso;
    this.nota = nota;

    if(nota<3){
        this.aprobado= false;
    }
    else{
        this.aprobado=true;
    }

    this.mostrarResultado = function(){
        if(this.aprobado){
            return `El alumno ${this.nombre} aprobó ${this.curso} con una nota de ${this.nota}! :D`
        }
        else{
            return `El alumno ${this.nombre} reprobó ${this.curso} con una nota de ${this.nota}. :(`
        }
        
    }

}

const alumno1 = new Estudiante("Pepito Perez", "Matematicas 1", 3.5);
const alumno2 = new Estudiante("Ana Banana", "Artes 2", 2.5);
const alumno3 = new Estudiante("Benito Palito", "Fisica 2", 4.5);
const alumno4 = new Estudiante("Andres Derbez", "Biologia 2", 5.0);

console.log("\n"+alumno1.mostrarResultado());
console.log(alumno2.mostrarResultado());
console.log(alumno3.mostrarResultado());
console.log(alumno4.mostrarResultado()+"\n");