// constructor

class book {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }

    mostrarDatosEnConsola() {
        console.log(this.getDatos());
    }

    mostrarDatosEnAlert() {
        alert(this.getDatos());
    }

    getTitulo() {
        return this.titulo;
    }

    getDatos() {
        return `${this.titulo}, de ${this.autor.toUpperCase()}`;
    }

    mostrarDatos(modo = 'console') {
        if (modo === 'alert') {
            this.mostrarDatosEnAlert();
        } else {
            this.mostrarDatosEnConsola();
        }
    }
}

// Libro {autor: "Dan Brown", titulo: "Ángeles y Demonios"}
let unLibro = new book('Ángeles y Demonios', 'Dan Brown');
console.log(unLibro); 
// "Ángeles y Demonios, de DAN BROWN" en consola
unLibro.mostrarDatosEnConsola();
// "Ángeles y Demonios, de DAN BROWN" en alert
unLibro.mostrarDatosEnAlert(); 

// 'Fuego y Sangre' 
let nuevolibro = new book('Fuego y Sangre', 'George R. R. Martin');
let tituloDelNuevoLibro = nuevolibro.getTitulo();
alert(tituloDelNuevoLibro); 

nuevolibro.mostrarDatos('alert'); 
nuevolibro.mostrarDatos('console'); 
nuevolibro.mostrarDatos(); 