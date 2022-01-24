import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list-category',
  templateUrl: './product-list-category.component.html',
  styleUrls: ['./product-list-category.component.scss']
})
export class ProductListCategoryComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) { 

  }

  ngOnInit(): void {
  }

}
