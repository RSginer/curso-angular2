import {Component} from "angular2/core";
import {Pelicula} from "../model/Pelicula";
import {PeliculasService} from "../services/peliculas.service";

@Component({
    selector: "peliculas-list",
    templateUrl: "app/views/peliculas-list.html",
    providers: [PeliculasService]
})

export class PeliculasListComponent {
    public peli: Pelicula;
    public mostrarDatos: boolean;
    public listaPelis: Array<Pelicula>;
    public peliculaElegida: Pelicula;
    public datoServicio;

    constructor(private _peliculasService: PeliculasService) {

        this.mostrarDatos = false;
        this.listaPelis = this._peliculasService.getPeliculas();
        this.peli = this.listaPelis[0];
        this.peliculaElegida = this.listaPelis[0];
    }

    public debug() {
        console.log(this.peli)
    }

    public onShowHide(value: boolean) {
        this.mostrarDatos = value;
    }

    public onCambiarPelicula(peli: Pelicula) {
        this.peli = peli;
        this.peliculaElegida = peli;
    }

}