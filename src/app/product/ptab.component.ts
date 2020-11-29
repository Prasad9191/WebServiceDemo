import { Component } from '@angular/core';
import {Product} from '../product.model';
import { ProductService } from '../product.service';
@Component({
    selector:"ptab",
    templateUrl:"./ptab.component.html",
    styleUrls:['./ptab.component.css']
})
export class PtabComponent{
    parr:Product[];
    pob:Product;
    flag:boolean=false;
    constructor(private pservice:ProductService){

    }
    ngOnInit(){
        this.pservice.getAllProduct()
        .subscribe(result=>this.parr=result);//for request send we used then only send req
    }
    updateProduct(p:Product){
        this.flag=true;
        this.pob=p;
    }
    deleteProduct(p:Product){
        this.pservice.deleteProduct(p).subscribe(result=>this.parr=result);
    }
    displayForm(){  
        this.flag=true;
    }
}