import {Component} from "angular2/core";
import {Pelicula} from "./model/pelicula";

@Component({
    selector: "mi-app",
    templateUrl:"app/views/peliculas.html",
    styleUrls: ["assets/css/styles.css"]
})

export class AppComponent{
    public titulo:string;
    public pelicula:Pelicula;
    public mostrarDatos:boolean;
    
    constructor(){
        this.mostrarDatos=false;
        this.titulo="Peliculas en Angular 2"
        this.pelicula=new Pelicula(1,"Batman vs superman","Zack Snider", 2016);
        this.debug();
    }
    
    public debug(){
        console.log(this.pelicula)
    }
    
    public onShowHide(value){
        this.mostrarDatos=value;
    }
    
   
}