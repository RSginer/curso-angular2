System.register(["angular2/core", "./components/peliculas-list.component", "./components/peliculasFooter.component", "./components/contacto.component", "angular2/router", "./components/crear.pelicula.component"], function(exports_1, context_1) {
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
    var core_1, peliculas_list_component_1, peliculasFooter_component_1, contacto_component_1, router_1, router_2, crear_pelicula_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (peliculas_list_component_1_1) {
                peliculas_list_component_1 = peliculas_list_component_1_1;
            },
            function (peliculasFooter_component_1_1) {
                peliculasFooter_component_1 = peliculasFooter_component_1_1;
            },
            function (contacto_component_1_1) {
                contacto_component_1 = contacto_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (crear_pelicula_component_1_1) {
                crear_pelicula_component_1 = crear_pelicula_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.titulo = "Peliculas con Angular 2";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "mi-app",
                        templateUrl: "app/views/peliculas.html",
                        directives: [peliculas_list_component_1.PeliculasListComponent,
                            peliculasFooter_component_1.PeliculasFooterComponent,
                            router_1.ROUTER_DIRECTIVES,
                            contacto_component_1.ContactoComponent,
                            crear_pelicula_component_1.CrearPeliculaComponent]
                    }),
                    router_2.RouteConfig([
                        { path: "/peliculas", name: "Peliculas", component: peliculas_list_component_1.PeliculasListComponent, useAsDefault: true },
                        { path: "/contacto", name: "Contacto", component: contacto_component_1.ContactoComponent },
                        { path: "/crear-pelicula", name: "CrearPelicula", component: crear_pelicula_component_1.CrearPeliculaComponent },
                        { path: "/crear-pelicula/:titulo/:director/:anio", name: "CrearPeliculaBasadaEnOtra", component: crear_pelicula_component_1.CrearPeliculaComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map