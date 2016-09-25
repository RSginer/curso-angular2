System.register(["../model/pelicula"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var pelicula_1;
    var PELICULAS;
    return {
        setters:[
            function (pelicula_1_1) {
                pelicula_1 = pelicula_1_1;
            }],
        execute: function() {
            exports_1("PELICULAS", PELICULAS = [
                new pelicula_1.Pelicula(1, "Batman vs superman", "Zack Snider", 2016),
                new pelicula_1.Pelicula(2, "Marvel", "Alfonso", 2012),
                new pelicula_1.Pelicula(3, "Spiderman", "Ruben", 2015),
                new pelicula_1.Pelicula(4, "IronMan", "pepito", 2002),
                new pelicula_1.Pelicula(5, "Dos tontos muy tontos", "Desconocido", 2004)
            ]);
        }
    }
});
//# sourceMappingURL=moc-peliculas.service.js.map