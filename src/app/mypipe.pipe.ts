import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:"testpipe"
})
export class MyPipe implements PipeTransform{
    transform(pname:string,price:number){
        if(price>1000){
            return pname+"--"+"luxury";
        }else{
            return pname+"--"+"moderate";
        }
    }
}
