import {Injectable} from "angular2/core";
import {PELICULAS} from "./moc-peliculas.service";
import {Pelicula} from "../model/pelicula";

@Injectable()
    export class PeliculasService{
        getPeliculas(){
            return PELICULAS;
        }

        setPelicula(pelicula: Pelicula){
            Promise.resolve(PELICULAS).then((peliculas: Pelicula[]) => peliculas.push(pelicula));
        }
    }
