import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipes.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('test recipe', 'test description', 'http://www.trandynow.com/wp-content/uploads/2018/04/recipe.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
