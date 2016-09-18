export class Pelicula{
  private id:number;
  private titulo:string;
  private director:string;
  private anio:number;
  
  constructor(id:number,titulo:string, director:string, anio:number){
      this.id=id;
      this.titulo=titulo;
      this.director=director;
      this.anio=anio;
  }
  
  public getId():number{
      return this.id;
  }
  public setId(id:number){
      this.id=id;
  }
  public getTitulo(): string { return this.titulo}
  
  public setTitulo(titulo:string){
      this.titulo=titulo;
  }
  
  public getDirector(): string { return this.director}
  
  public setDirector(director:string){
      this.director=director;
  }
  
  public getAnio(): number { return this.anio}
  
  public setAnio(anio:number){
      this.anio=anio;
  }
}