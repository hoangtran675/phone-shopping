import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/model/categories-model';
import { CategoryService } from 'src/app/services/categories-service/category-service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  
  
  constructor(private categoryService : CategoryService) { }
  categories : Category[];
  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe({
      next: (resp) => {
        this.categories = resp.body;
        console.log('Image of the first category : ' + this.categories[0].image);
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
      }
    });
  }
  category : Category;
  viewMore(category : Category) : void {
    this.category = category;
  }
  

}
