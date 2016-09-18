import {Component} from "angular2/core";
import {Pelicula} from "./model/pelicula";

@Component({
    selector: "mi-app",
    templateUrl:"app/views/peliculas.html"
})

export class AppComponent{
    public titulo:string;
    public pelicula:Pelicula;
    
    constructor(){
        this.titulo="Listado de peliculas en Angular 2"
        this.pelicula=new Pelicula(1,"Batman vs superman","Zack Snider", 2016);
        this.debug();
    }
    
    public debug(){
        console.log(this.pelicula)
    }
}