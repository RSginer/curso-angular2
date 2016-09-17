import {Component} from "angular2/core";

@Component({
    selector: "mi-app",
    templateUrl:"app/views/peliculas.html"
})

export class AppComponent{
    public titulo:string;
    public pelicula:string;
    public director:string;
    public anio:number;
    
    constructor(){
        this.titulo = "Peliculas con angular 2";
        this.pelicula = "Batman";
        this.director = "Zack Snider";
        this.anio = 2016;
        //this.holaMundo();
    }
    
//    public holaMundo(){
//        alert("Hola mundo desde Angular");
//    }
}