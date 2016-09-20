import  {Component} from "angular2/core";
import {Pelicula} from "../model/Pelicula";

@Component({
    selector: "peliculas-list",
    templateUrl: "app/views/peliculas-list.html"
})

export class PeliculasListComponent{
 public peli:Pelicula;
    public mostrarDatos:boolean;
    public listaPelis:Array<Pelicula>;
    public peliculaElegida:Pelicula;
    constructor(){
        this.mostrarDatos=false;
        this.listaPelis = [
            new Pelicula(1,"Batman vs superman","Zack Snider", 2016),
            new Pelicula(2,"Marvel","Alfonso", 2012),
            new Pelicula(3,"Spiderman","Ruben", 2015),
            new Pelicula(4,"IronMan","pepito", 2002)
        ]
         this.peli=this.listaPelis[0];
         this.peliculaElegida=this.listaPelis[0];
    }
    
    public debug(){
        console.log(this.peli)
    }
    
    public onShowHide(value:boolean){
        this.mostrarDatos=value;
    }

    public onCambiarPelicula(peli:Pelicula){
        this.peli=peli;
        this.peliculaElegida=peli;
    }

}