import {Component} from "angular2/core";
import {PeliculasListComponent} from "./components/peliculas-list.component";
import {PeliculasFooterComponent} from "./components/peliculasFooter.component";
import {ContactoComponent} from "./components/contacto.component";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig} from "angular2/router";
import {Router} from "angular2/router";
import {CrearPeliculaComponent} from "./components/crear.pelicula.component";

@Component({
    selector: "mi-app",
    templateUrl: "app/views/peliculas.html",
    directives: [PeliculasListComponent, PeliculasFooterComponent, ROUTER_DIRECTIVES, ContactoComponent, CrearPeliculaComponent]
})

@RouteConfig([
    { path: "/peliculas", name: "Peliculas", component: PeliculasListComponent, useAsDefault: true },
    { path: "/contacto", name: "Contacto", component: ContactoComponent },
    { path: "/crear-pelicula", name: "CrearPelicula", component: CrearPeliculaComponent },
    { path: "/crear-pelicula/:titulo", name: "CrearPeliculaBasadaEnOtra", component: CrearPeliculaComponent }
])

export class AppComponent {
    public titulo: string = "Peliculas con Angular 2";




}