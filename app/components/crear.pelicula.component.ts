import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {Pelicula} from "../model/pelicula";
import {RouteConfig, ROUTER_DIRECTIVES,Router, RouteParams} from "angular2/router";
import {PeliculasService} from "../services/peliculas.service";


@Component({
    templateUrl:"app/views/crear-pelicula.html",
    providers:[PeliculasService]
})

export class CrearPeliculaComponent implements OnInit{
        private titulo:string="Crear pelicula";
        public tituloPelicula ="";
        public nuevaPelicula:Pelicula;
        constructor(private _peliculasService: PeliculasService,
         private _router: Router,
         private _routeParams: RouteParams){

        }


        public getTitulo():string{
            return this.titulo;
        }


        onSubmit(){
            this._peliculasService.setPelicula(this.nuevaPelicula);
            this._router.navigate(["Peliculas"]);
        }

        ngOnInit():any{
            this.tituloPelicula = this._routeParams.get("titulo");
            this.nuevaPelicula = new Pelicula(
                0,
                this._routeParams.get("titulo"),
                this._routeParams.get("director"),
                this._routeParams.get("anio")
            );
        }
}