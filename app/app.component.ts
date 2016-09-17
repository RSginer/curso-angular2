import {Component} from "angular2/core";

@Component({
    selector: "mi-app",
    template: `<h1>{{titulo}}</h1>
                <ul>
                <li>Titulo: <strong>{{pelicula}}</strong></li>
                <li>Director:<strong> {{director}}</strong></li>
                <li>Año: <strong>{{anio}}</strong></li>
                </ul>`
})

export class AppComponent{
    public titulo:string = "Peliculas con angular 2";
    public pelicula:string = "Bataman";
    public director:string = "Zack Snider";
    public anio:number = 2016;
    
}