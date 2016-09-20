System.register(["angular2/core", "../model/Pelicula"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Pelicula_1;
    var PeliculasListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Pelicula_1_1) {
                Pelicula_1 = Pelicula_1_1;
            }],
        execute: function() {
            PeliculasListComponent = (function () {
                function PeliculasListComponent() {
                    this.mostrarDatos = false;
                    this.listaPelis = [
                        new Pelicula_1.Pelicula(1, "Batman vs superman", "Zack Snider", 2016),
                        new Pelicula_1.Pelicula(2, "Marvel", "Alfonso", 2012),
                        new Pelicula_1.Pelicula(3, "Spiderman", "Ruben", 2015),
                        new Pelicula_1.Pelicula(4, "IronMan", "pepito", 2002)
                    ];
                    this.peli = this.listaPelis[0];
                    this.peliculaElegida = this.listaPelis[0];
                }
                PeliculasListComponent.prototype.debug = function () {
                    console.log(this.peli);
                };
                PeliculasListComponent.prototype.onShowHide = function (value) {
                    this.mostrarDatos = value;
                };
                PeliculasListComponent.prototype.onCambiarPelicula = function (peli) {
                    this.peli = peli;
                    this.peliculaElegida = peli;
                };
                PeliculasListComponent = __decorate([
                    core_1.Component({
                        selector: "peliculas-list",
                        templateUrl: "app/views/peliculas-list.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], PeliculasListComponent);
                return PeliculasListComponent;
            }());
            exports_1("PeliculasListComponent", PeliculasListComponent);
        }
    }
});
//# sourceMappingURL=peliculas-list.component.js.map