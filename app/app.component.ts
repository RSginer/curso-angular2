import {Component} from "angular2/core";
import {PeliculasListComponent} from "./components/peliculas-list.component";
import {PeliculasFooterComponent} from "./components/peliculasFooter.component";
import {ContactoComponent} from "./components/contacto.component";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig} from "angular2/router";
import {Router} from "angular2/router";

@Component({
    selector: "mi-app",
    templateUrl:"app/views/peliculas.html",
    directives: [PeliculasListComponent,PeliculasFooterComponent, ROUTER_DIRECTIVES, ContactoComponent]
})

@RouteConfig([
    {path:"/peliculas", name: "Peliculas", component:  PeliculasListComponent, useAsDefault: true},
    {path:"/contacto", name: "Contacto", component: ContactoComponent}
])
export class AppComponent{
    public titulo:string="Peliculas con Angular 2";
   
    
   
}