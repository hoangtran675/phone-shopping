import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product-model';
import { ProductService } from 'src/app/services/product-service/product-service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
addStatus : boolean;
nameOfForm : string;
product : Product = {
  id : 0,
  productName : '',
  price: 0,
  image: '',
  categoryID : 0,
  createDate : new Date(),
  supplierID : 0
};
  constructor(private fb: FormBuilder, private productService : ProductService,private router : ActivatedRoute, private _router : Router) { }
  addForm : FormGroup;
  ngOnInit(): void {
    const itemId = this.router.snapshot.params['id'];
    if(itemId == '0'){
      this.addStatus = false;
      this.nameOfForm = 'Add Product';
      this.addForm = this.fb.group({
        id : ['',[Validators.required, Validators.min(1)]],
        productName : ['',[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
        price: ['',[Validators.required]],
        image: ['',[Validators.required]],
        categoryID : ['', [Validators.min(1)]],
        createDate : Date.now,
        supplierID : ['', [Validators.min(1)]]
      });
    } else{
      this.addStatus = true;
      this.nameOfForm = 'Update Product';
      this.productService.getAllProductById(itemId).subscribe({
        next : (resp)=>{
          //this.product = resp.body;
          const product : Product = resp.body;
          this.addForm = this.fb.group({
        id : [itemId,[Validators.required, Validators.min(1)]],
        productName : [product.productName,[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
        price: [product.price,[Validators.required]],
        image: [product.image,[Validators.required]],
        categoryID : [product.categoryID, [Validators.min(1)]],
        createDate : product.createDate,
        supplierID : [product.supplierID, [Validators.min(1)]]
      });
        }
      });
    }


  }

  addProduct(value : JSON){
    this.addForm.patchValue({});
  }
  handleAddProduct(){
    let product = {
      // get theo id 
      // id : this.addForm.get('id')!.value,
      productName : this.addForm.get('productName')!.value,
      price : this.addForm.get('price')!.value,
      image : this.addForm.get('image')!.value,
      categoryID : this.addForm.get('categoryID')!.value,
      createDate : this.addForm.get('createDate')!.value,
      supplierID : this.addForm.get('supplierID')!.value
    }
    
    
    this.productService.createProduct(product).subscribe({
      next : (resp) => {
        this._router.navigateByUrl('/inside/products');
      }
    });
  }

}
