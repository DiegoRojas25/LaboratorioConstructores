function Libro(titulo, categoria, estado){
    this.titulo = titulo;
    this.categoria = categoria;
    this.estado = estado;
    this.prestado = false;

    this.prestar = function(){
        if(!this.prestado){
            return this.prestado = true;
        }
        else{
            console.log(`¡El libro ${this.titulo} ya está prestado!`);
        }
    }

    this.devolver = function(){
        if(this.prestado===true){
            return this.prestado = false;
        }
        else{
            console.log(`¡El libro ${this.titulo} ya aparece prestado! Verifica esto, por favor`);
        }
    }

}

const libro1 = new Libro("Drácula", "terror", "Bueno");
const libro2 = new Libro("El Principito", "Infantil", "Ligeramente Desgastado");
const libro3 = new Libro("El Túnel", "Novela Psicologica", "Rayado");
const libro4 = new Libro("La Metamorfosis", "Ficcion", "Deteriorado");

libro1.prestar();
libro1.devolver();
libro1.devolver();

console.log(libro1.prestado);

