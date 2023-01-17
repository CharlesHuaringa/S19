import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit{
  productId: string | null = null;
  constructor(
    private route: ActivatedRoute,
    private productsServices: ProductsService
  ){}

  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id')
      console.log(this.productId)
    })
    console.log(this.productsServices.getAllProduct())
    if(this.productId){
      console.log(this.productsServices.getProductById)
    }
  }
}
