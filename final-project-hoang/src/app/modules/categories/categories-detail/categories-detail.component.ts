import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/model/categories-model';
import { CategoryService } from 'src/app/services/categories-service/category-service';

@Component({
  selector: 'app-categories-detail',
  templateUrl: './categories-detail.component.html',
  styleUrls: ['./categories-detail.component.scss']
})
export class CategoriesDetailComponent implements OnInit {
  category : Category;
  id : string;

  constructor(private router:ActivatedRoute, private categoryService : CategoryService) { }

  ngOnInit(): void {
      this.id  = this.router.snapshot.params["id"];
      this.categoryService.getCategoryById(this.id).subscribe({
        next : (res) => {
            this.category  = res.body;
        }
      });


  }

}
