import {Component} from "angular2/core";

@Component({
    selector: "mi-app",
    template: `<h1>{{titulo}}</h1>
                <ul>
                <li>Titulo: {{pelicula}}</li>
                <li>Director: {{director}}</li>
                <li>Año: {{anio}}</li>
                </ul>`
})

export class AppComponent{
    public titulo:string = "Peliculas con angular 2";
    public pelicula:string = "Bataman";
    public director:string = "Zack Snider";
    public anio:number = 2016;
    
}