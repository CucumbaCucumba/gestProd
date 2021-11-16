import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit {
  nomButt :string = "masquer";
  products :Produit[]=[
    {id :1,nom :"LapTop",prix :1200,quantite :100,urlImg :"./assets/images/laptop.jpg"},
    {id :2,nom :"Nividia RTX 3060 Ti",prix :30500,quantite :0,urlImg :"./assets/images/RTX 3070.jpg"},
    {id :3,nom :"USB 128 GB",prix :200,quantite :100,urlImg :"./assets/images/usb.jpg"}
  ]

  productsF :Produit[]
  constructor() { }

  set y(s:string){
    this.productsF=this.filter(s);
  }

  filter(s:string){
    return this.products.filter(x=>x.nom.indexOf(s)!=-1)
  }
  getColor(q:number){
    if(q==0)
      return "red"
      else
      return "black"
    }
  

  toggleIMG()
  {
    if(this.nomButt=="masquer")
      this.nomButt = "afficher"
    else
      this.nomButt = "masquer"  
  }

  ngOnInit() {
    this.productsF=this.products
  }

}
