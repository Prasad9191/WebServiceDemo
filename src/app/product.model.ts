export class Product{
    pid:number;
    pname:string;
    price:number;

    constructor(pid:number,nm:string,price:number){
        this.pid=pid;
        this.pname=nm;
        this.price=price;
    }
}