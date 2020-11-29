import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from './product.model';
@Injectable()
export class ProductService{
     baseUrl="http://localhost:8080/MyRestProductWebService";//webserive url
    constructor(private httpC:HttpClient){//angular url 

    }
    getAllProduct():Observable<Product[]>{//observable give us webservice data into json raw  format then convert into angular understandable 
       return  this.httpC.get<Product[]>(this.baseUrl+"/products");
    }
    addProduct(p:Product):Observable<Product[]>{
        return this.httpC.post<Product[]>(this.baseUrl+"/products",p)
    }
    updateProduct(p:Product):Observable<Product[]>{
        return this.httpC.put<Product[]>(this.baseUrl+"/products",p);
    }
    deleteProduct(p:Product):Observable<Product[]>{
        return this.httpC.delete<Product[]>(this.baseUrl+"/products/"+p.pid);
    }
}
