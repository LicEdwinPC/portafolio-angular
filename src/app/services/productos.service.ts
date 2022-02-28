import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  public productos: Producto[] | undefined;
  public productosFiltrado: Producto[] | undefined;

  constructor(private http:HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos(){

    return new Promise<void>((resolve, reject) =>{
      this.http.get<Producto[]>("https://angular-html-70639-default-rtdb.firebaseio.com/productos_idx.json").subscribe((resp: Producto[])=>{
      
        this.productos = resp;
        this.cargando = false;

        resolve();
  
      });
    });

    
  }

  getProducto(id:string){
      return this.http.get(`https://angular-html-70639-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino:string){
    if(this.productos?.length === 0){

      this.cargarProductos().then( ()=> {
        //aplicar filtro
        this.filtrarProductos( termino );
      });
    }else{
      //aplicar filtro
      this.filtrarProductos(termino);
    }
      // this.productosFiltrado = this.productos?.filter( producto =>{
      //   return true;
      // });
  }

  filtrarProductos(termino:string){
    this.productosFiltrado= [];

    termino = termino.toLowerCase();

    

    this.productos?.forEach(prod =>{
      const titulo_lower = prod.titulo.toLowerCase();

           
        if (prod['categoria'].indexOf( termino) >= 0 || titulo_lower.indexOf(termino) >= 0) {
          
          this.productosFiltrado?.push(prod);
          console.log(this.productosFiltrado); 
        }
    });

  }
}
