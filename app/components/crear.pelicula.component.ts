import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {Pelicula} from "../model/pelicula";
import {Router, RouteParams} from "angular2/router";
import {PeliculasService} from "../services/peliculas.service";

@Component({
    templateUrl:"app/views/crear-pelicula.html",
    providers:[PeliculasService]
})

export class CrearPeliculaComponent implements OnInit{
        private titulo:string="Crear pelicula";
        public tituloPelicula ="";

        constructor(private _peliculasService: PeliculasService,
         private _router: Router,
         private _routeParams: RouteParams){

        }

        public getTitulo():string{
            return this.titulo;
        }


        onCrearPelicula(titulo, director, anyo){
            let pelicula: Pelicula=new Pelicula(99,titulo,director,anyo);
            this._peliculasService.setPelicula(pelicula);
            this._router.navigate(["Peliculas"]);
        }

        ngOnInit():any{
            this.tituloPelicula = this._routeParams.get("titulo");
        }
}