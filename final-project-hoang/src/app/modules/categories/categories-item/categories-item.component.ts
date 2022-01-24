import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/model/categories-model';
import { CategoryService } from 'src/app/services/categories-service/category-service';

@Component({
  selector: 'app-categories-item',
  templateUrl: './categories-item.component.html',
  styleUrls: ['./categories-item.component.scss']
})
export class CategoriesItemComponent implements OnInit {
  @Input() item : Category;
  @Output() viewMoreChild : EventEmitter<any> = new EventEmitter<any>();

  constructor(private categoryService : CategoryService) { }
  categories : Category[];
  ngOnInit(): void {
    console.log('Image Of Category : ' +  this.item.image);
  }
  viewMore(category : Category){
    this.viewMoreChild.emit(category);
  }
 

}
