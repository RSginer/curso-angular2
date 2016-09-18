System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Pelicula;
    return {
        setters:[],
        execute: function() {
            Pelicula = (function () {
                function Pelicula(id, titulo, director, anio) {
                    this.id = id;
                    this.titulo = titulo;
                    this.director = director;
                    this.anio = anio;
                }
                Pelicula.prototype.getId = function () {
                    return this.id;
                };
                Pelicula.prototype.setId = function (id) {
                    this.id = id;
                };
                Pelicula.prototype.getTitulo = function () { return this.titulo; };
                Pelicula.prototype.setTitulo = function (titulo) {
                    this.titulo = titulo;
                };
                Pelicula.prototype.getDirector = function () { return this.director; };
                Pelicula.prototype.setDirector = function (director) {
                    this.director = director;
                };
                Pelicula.prototype.getAnio = function () { return this.anio; };
                Pelicula.prototype.setAnio = function (anio) {
                    this.anio = anio;
                };
                return Pelicula;
            }());
            exports_1("Pelicula", Pelicula);
        }
    }
});
//# sourceMappingURL=pelicula.js.map