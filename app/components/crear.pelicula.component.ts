import {Component} from "angular2/core";
import {Pelicula} from "../model/pelicula";
import {Router} from "angular2/router";
import {PeliculasService} from "../services/peliculas.service";
@Component({
    selector: "crear-pelicula",
    templateUrl:"app/views/crear-pelicula.html",
    providers:[PeliculasService]
})

export class CrearPeliculaComponent{
        private titulo:string="Crear pelicula";

        constructor(private _peliculasService: PeliculasService, private _router: Router){

        }

        public getTitulo():string{
            return this.titulo;
        }

        onCrearPelicula(titulo, director, anyo){
            let pelicula: Pelicula=new Pelicula(99,titulo,director,anyo);
            this._peliculasService.setPelicula(pelicula);
            this._router.navigate(["Peliculas"])
        }
}