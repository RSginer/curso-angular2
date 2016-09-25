import {Injectable} from "angular2/core";
import {PELICULAS} from "./moc-peliculas.service";

@Injectable()
    export class PeliculasService{
        getPeliculas(){
            return PELICULAS;
        }
    }
