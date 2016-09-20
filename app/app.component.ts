import {Component} from "angular2/core";
import {Pelicula} from "./model/pelicula";

@Component({
    selector: "mi-app",
    templateUrl:"app/views/peliculas.html",
    styleUrls: ["assets/css/styles.css"]
})

export class AppComponent{
    public titulo:string;
    public peli:Pelicula;
    public mostrarDatos:boolean;
    public listaPelis:Array<Pelicula>;
    constructor(){
        this.mostrarDatos=false;
        this.titulo="Peliculas en Angular 2"
        this.peli=new Pelicula(1,"Batman vs superman","Zack Snider", 2016);
        this.listaPelis = [
            new Pelicula(1,"Batman vs superman","Zack Snider", 2016),
            new Pelicula(2,"Marvel","Alfonso", 2012),
            new Pelicula(3,"Spiderman","Ruben", 2015),
            new Pelicula(4,"IronMan","pepito", 2002)
        ]
    }
    
    public debug(){
        console.log(this.peli)
    }
    
    public onShowHide(value:boolean){
        this.mostrarDatos=value;
    }
    
   
}