System.register(["angular2/core", "./moc-peliculas.service"], function(exports_1, context_1) {
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
    var core_1, moc_peliculas_service_1;
    var PeliculasService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (moc_peliculas_service_1_1) {
                moc_peliculas_service_1 = moc_peliculas_service_1_1;
            }],
        execute: function() {
            PeliculasService = (function () {
                function PeliculasService() {
                }
                PeliculasService.prototype.getPeliculas = function () {
                    return moc_peliculas_service_1.PELICULAS;
                };
                PeliculasService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], PeliculasService);
                return PeliculasService;
            }());
            exports_1("PeliculasService", PeliculasService);
        }
    }
});
//# sourceMappingURL=peliculas.service.js.map