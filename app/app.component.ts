import {Component} from "angular2/core";
import {PeliculasListComponent} from "./components/peliculas-list.component";
import {PeliculasFooterComponent} from "./components/peliculasFooter.component";

@Component({
    selector: "mi-app",
    templateUrl:"app/views/peliculas.html",
    directives: [PeliculasListComponent,PeliculasFooterComponent]
})

export class AppComponent{
    public titulo:string="Peliculas con Angular 2";
   
    
   
}