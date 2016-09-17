import {Component} from "angular2/core";

@Component({
    selector: "mi-app",
    templateUrl:"app/views/peliculas.html"
})

export class AppComponent{
    public titulo:string = "Peliculas con angular 2";
    public pelicula:string = "Bataman";
    public director:string = "Zack Snider";
    public anio:number = 2016;
    
}