import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipes.model';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
  recipes: Recipe[];


  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
  }
}
